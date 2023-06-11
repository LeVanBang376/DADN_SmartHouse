const mongoose = require("mongoose");

const sensorSchema = new mongoose.Schema({
    sensorName: {
        type: String,
        required: true
    },
    sensorType: {
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

mongoose.model("Sensor", sensorSchema);