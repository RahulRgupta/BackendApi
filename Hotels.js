const mongoose = require("mongoose");
const validator =require("validator");

const PropertySchema = new mongoose.Schema({

    owner_id: {
        type: Number
    },
    hotel_id: {
        type: Number,
        required: true
    },

    hotel_name: {
        type: String,
        required: true
    },

    hotel_location: {
        type: String,
        required: true
    },
    hotel_stars: {
        type: Number,
        required: true
    },
    hotel_room: {
        type: Number,
        required: true
    },
    Number_of_banquet: {
        type: Number,
        required: true
    }  


});

  //const Hotel= mongoose.model('Hotel', Hotel_details);
  const Property = mongoose.model('Property',PropertySchema);
  module.exports =Property;