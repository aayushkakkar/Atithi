const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync.js");

const {storage} = require("../cloudConfig.js");
const multer = require("multer");
const upload = multer({ storage });

const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const listingController = require("../controllers/listingControl.js");

//home page
router.get(
  "/",
  wrapAsync(listingController.index)
);

//New Listing form
router.get("/new", isLoggedIn, listingController.renderNewListingForm);

//Create New Listing
router
.post(
  "/",
  isLoggedIn,
  validateListing,
  upload.single("listing[image]"),
  wrapAsync(listingController.createNewListing),
);

//show listing
router.get(
  "/:id",
  wrapAsync(listingController.showListing),
);

//edit form
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditListingForm),
);

//update listing
router.put(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  upload.single("listing[image]"),
  validateListing,  
  wrapAsync(listingController.updateListing),
);

//delete route
router.delete(
  "/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.destroyListing),
);

module.exports = router;
