const express = require("express");
const router = express.Router({ mergeParams: true });

const wrapAsync = require("../utils/wrapAsync.js");

const {
  isLoggedIn,
  validateReview,
  isReviewAuthor,
} = require("../middleware.js");

const reviewController = require("../controllers/reviewControl.js");

//reviews post route
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.postReview),
);

//review deleteion
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewController.destroyReview),
);

module.exports = router;
