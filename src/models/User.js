const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

        gender: String,
        name: { title: String, first: String, last: String},
        email: String,
        id: mongoose.Schema.Types.Mixed,
        status: { 
            type: String,
            enum: ["draft", "trash", "published"],
            required: true
        },
        imported_t:  {
            type: Date,
            required: true
        }
}, {strict: false});

module.exports = mongoose.model('User', UserSchema);