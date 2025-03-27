const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlSchema = new Schema({
    originalurl:{
        type: String,
        require: true
    },
    shorturl:{
        type: String,
        require: true,
        unique: true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    clicks: {
        type: Number, 
        default: 0 
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports= mongoose.model('Url', urlSchema)