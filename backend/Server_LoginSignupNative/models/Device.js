const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema({
    deviceName: {
        type: String,
        required: true
    },
    deviceType: {
        type: String,
        required: true
    },
    roomId: {
        type: Number,
        required: true
    },
    userDbId: {
        type: String,
        required: true
    },
    relay: {
        type: Number,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    timeAuto: {
        type: String,
        required: true
    },
    sensorAuto: {
        type: String,
        required: true
    },
    onHour: {
        type: Number,
        required: true
    },
    onMin: {
        type: Number,
        required: true
    },
    offHour: {
        type: Number,
        required: true
    },
    offMin: {
        type: Number,
        required: true
    },
    onSensor: {
        type: Number,
        required: true
    },
    offSensor: {
        type: Number,
        required: true
    },
})

mongoose.model("Device", deviceSchema);