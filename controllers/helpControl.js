const Message = require("../models/contactMsgSchema");

module.exports.renderPrivacyPage = (req, res) => {
    res.render("help/privacy.ejs");
};

module.exports.renderTermsPage = (req, res) => {
    res.render("help/terms.ejs");
};

module.exports.renderContactPage = (req, res) => {
    res.render("help/contact.ejs")
};

module.exports.postMessage = async(req, res) => {
    
    let newMessage = new Message(req.body.contact);
    if(req.user){
        newMessage.author = req.user._id;
    }
    await newMessage.save();
    req.flash("success", "Your query has been sent. Thank you for reaching us out.")
    res.redirect("/listings");
};