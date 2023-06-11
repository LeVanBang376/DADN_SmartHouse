const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    roomName: {
        type: String,
        required: true
    },
    roomType: {
        type: String,
        required: true
    },
    userDbId: {
        type: String,
        required: true
    },
    roomId: {
        type: Number,
        required: true
    }
})

mongoose.model("Room", roomSchema);