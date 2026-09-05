const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./reviewSchema.js");

const listingSchema = new Schema( {
    title : {
        type : String,
        required : true
    },

    description : String,
    
    price : {
        type : Number,
        required : true
    },

    image : {
        filename : {
            type : String,
        },
        url : {
            type : String,
        }
    },

    location : {
        type : String,
        required : true
    },

    country : String,

    reviews : [
          {
            type : Schema.Types.ObjectId,
            ref : "Review"
        }
    ],
    owner : {
        type : Schema.Types.ObjectId,
        ref : "User"
    },

    geometry : {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },

});

listingSchema.post("findOneAndDelete", async (delListing) => {
    if(delListing){
        await Review.deleteMany({ _id : {$in : delListing.reviews}});
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;