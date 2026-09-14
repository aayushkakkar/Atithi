const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listingSchema.js")

// const MongoUrl = "mongodb://127.0.0.1:27017/atithiDB";
const MongoUrl = process.env.ATLASDB_URL;
async function main(){
    await mongoose.connect(MongoUrl);
}

main().then( (result) => {
    console.log("Database Started.");
})
.catch( (err) => {
    console.log("DB error: ", err);
})

const ogOwner = "6aa7c05928c473ae231ebbb1";

const initDb = async () => {
    await Listing.deleteMany({}); //deleting any remanant data
    initData.data = initData.data.map( (obj) => ({...obj, owner : ogOwner}));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
}

initDb();