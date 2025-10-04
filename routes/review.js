const express = require("express");
const router = express.Router({ mergeParams:true});
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/review.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");
const listingController = require("../controllers/review.js"); 



// Reviews - POST route
router.post("/", isLoggedIn ,validateReview, wrapAsync(listingController.createReview));

// Delete Review Route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(listingController.destroyReview));

module.exports = router;