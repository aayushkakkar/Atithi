const Listing = require("../models/listingSchema");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });


module.exports.index = async (req, res) => {
    let allListings = await Listing.find();
    res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewListingForm = (req, res) => {
  res.render("listings/create.ejs");
};

module.exports.createNewListing = async (req, res) => {

  let gcResponse = await geocodingClient.forwardGeocode({
  // query: 'Chandigarh, India',
  query: req.body.listing.location, 
  limit: 1
  })
  .send();

    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.image = {url, filename};
    newListing.owner = req.user._id;
    newListing.geometry = gcResponse.body.features[0].geometry;
    console.log(newListing);
    await newListing.save();
    req.flash("success", "New Listing created.");
    res.redirect("/listings");
  };

module.exports.searchListings = async(req, res) => {
  let {q} = req.query;
  let allListings = await Listing.find({
    title : { $regex:q , $options:"i"}
  });
  res.render("listings/index.ejs", {allListings});

}

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const selectedListing = await Listing.findById(id)
      .populate({ path : "reviews", populate : "author"})
      .populate("owner");
    if (!selectedListing) {
      req.flash("error", "Listing you requested does not exist");
      return res.redirect("/listings");
    }
    res.render("listings/show.ejs", { selectedListing });
  };

module.exports.renderEditListingForm = async (req, res) => {
    let { id } = req.params;
    const editListing = await Listing.findById(id);
    if (!editListing) {
      req.flash("error", "Listing you requested does not exist");
      return res.redirect("/listings");
    }

    let imgUrl = editListing.image.url;
    imgUrl = imgUrl.replace("/upload", "/upload/w_250");
    res.render("listings/edit.ejs", { editListing, imgUrl });
  };

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    if (!req.body.listing) {
      throw new expressError(400, "Send Valid Data!");
    }

    let newListing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    if(typeof req.file !== "undefined"){
      let url = req.file.path;
      let filename = req.file.filename;
      newListing.image = {url, filename};
      newListing.save();
    }

    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
  };

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    console.log("DELETED LISTING: ", deletedListing);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
  };