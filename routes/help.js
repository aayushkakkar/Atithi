const express = require("express");
const router = express.Router();

const helpController = require("../controllers/helpControl.js");

router.get("/privacy", helpController.renderPrivacyPage);

router.get("/terms", helpController.renderTermsPage);

router.get("/contact", helpController.renderContactPage);

router.post("/contact", helpController.postMessage);

module.exports = router;