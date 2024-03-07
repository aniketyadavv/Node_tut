const mongoose = require('mongoose');

//define menu's schema
const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,

    },
    taste: {
        type: String,
        enum: ['sweet','salty','bitter'],
    }
})

//create menu schema
const Menu = mongoose.model('Menu', menuSchema)

module.exports = Menu 