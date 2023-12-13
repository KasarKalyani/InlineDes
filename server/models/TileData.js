const mongoose = require('mongoose');

const TileData = new mongoose.Schema({
    title: {
        type: String,
        require: false
    },
    description: {
        type: String,
        require: false
    },
    datetime: {
        type: String,
        require: false
    },
    status: {
        type: String,
        require: false
    },
    imagesrc: {
        type: String,
        require: false
    }
})

module.exports= mongoose.model('TileData',TileData);