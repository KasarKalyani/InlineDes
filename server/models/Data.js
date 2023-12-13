
const mongoose =require('mongoose');

const sendingDataSchema = new mongoose.Schema({
    text: {
        type: String,
        require: false
    }
})

module.exports= mongoose.model('sendingDataSchema', sendingDataSchema);