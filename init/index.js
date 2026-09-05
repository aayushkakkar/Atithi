const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listingSchema.js")

const MongoUrl = "mongodb://127.0.0.1:27017/atithiDB";
async function main(){
    await mongoose.connect(MongoUrl);
}

main().then( (result) => {
    console.log("Database Started.");
})
.catch( (err) => {
    console.log("DB error: ", err);
})

const initDb = async () => {
    await Listing.deleteMany({}); //deleting any remanant data
    initData.data = initData.data.map( (obj) => ({...obj, owner : "6a8c18d0c63b359e027032d7"}));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
}

initDb();