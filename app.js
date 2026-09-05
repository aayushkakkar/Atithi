if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
};
const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const app = express();

const mongoose = require("mongoose");

// const MongoUrl = "mongodb://127.0.0.1:27017/atithiDB";
const dbUrl = process.env.ATLASDB_URL;
async function main(){
    await mongoose.connect(dbUrl);
}

const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

const passport = require("passport");
const Localstrategy = require("passport-local");
const User = require("./models/userSchema.js");

const session = require("express-session");
const MongoStore = require("connect-mongo").default || require("connect-mongo");
const store = MongoStore.create({
    mongoUrl : dbUrl,
    crypto: {
        secret : process.env.SECRET,
    },
    touchAfter : 24 * 3600,
});
store.on("error", (err) => {
    console.log("ERROR in Mongo Session Store", err);
});
const sessionOptions = {
    store,
    secret : process.env.SECRET,
    resave : false,
    saveUninitialized : true,
    cookie : {
        expires : Date.now() + 7 * 24 * 3600 * 1000,
        maxAge : 7 * 24 * 3600 * 1000,
        httpOnly : true
    },
};
app.use(session(sessionOptions));

const flash = require("connect-flash");
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new Localstrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(express.urlencoded({extended : true}) );

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

const ejsMate = require("ejs-mate");
app.engine("ejs", ejsMate);

const wrapAsync = require("./utils/wrapAsync.js");
const expressError = require("./utils/expressError.js");

const listingRoutes = require("./routes/listing.js");
const reviewRoutes = require("./routes/review.js");
const userRoutes = require("./routes/user.js");



main().then( (result) => {
    console.log("Database Started.");
})
.catch( (err) => {
    console.log("DB error: ", err);
});

app.use((req, res, next) => {
   res.locals.successMsg = req.flash("success");
   res.locals.errorMsg = req.flash("error");
   res.locals.currUser = req.user;
   next(); 
});

//root route
app.get("/", (req, res) => {
    res.send(`<h1>Atithi</h1>
    <h2>Book not a Stay, But an Experience with us</h2>`);
});

//all listing routes
app.use("/listings", listingRoutes);

//review routes
app.use("/listings/:id/reviews", reviewRoutes);

app.use("/", userRoutes);

// app.all("*", (req, res, next) => {
//     next(new expressError(404, "Page Not Found"));
// }); //not valid in Express V5

app.use( (req, res, next) => {
    next(new expressError(404, "Page Not Found"));
});

app.use( (err, req, res, next) => {
    let {statusCode = 500, message = "Some error occured"} = err;
    console.log(err);
    // res.status(statusCode).send(message);
    res.status(statusCode).render("listings/error.ejs", {message});
});

app.listen( 8080, () => {
    console.log("app listening on port 8080");
});