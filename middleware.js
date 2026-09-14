const Listing = require("./models/listingSchema.js");
const Review = require("./models/reviewSchema.js");

const {listingSchema, reviewSchema} = require("./schema.js");
const expressError = require("./utils/expressError.js");

module.exports.isLoggedIn = (req, res, next) =>  {
    if (!req.isAuthenticated()) {
        req.flash("error", "You need to be logged in");
        return res.redirect("/user/login");
    }
    next();
};

module.exports.isOwner = async (req, res, next) => {
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.currUser._id)){
      req.flash("error", "You are not the owner of this listing");
      return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.isReviewAuthor = async(req, res, next) => {
    let {id, reviewId} = req.params;
    let review = await Review.findById(reviewId);
    if(!review.author.equals(res.locals.currUser._id)){
        req.flash("error", "You are not the writer of this review.");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new expressError(400, errMsg);
  } else {
    next();
  }
};

module.exports.validateReview  = (req, res, next) => {
    let {err} = reviewSchema.validate(req.body);
    if(err){
        let errMsg = err.details.map( (el) => el.message).join(",");
        throw new expressError(400, errMsg);
    }
    else{
        next();
    }
};