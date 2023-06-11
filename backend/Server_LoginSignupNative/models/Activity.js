const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
    userDbId: {
        type: String,
        required: true
    },
    roomName: {
        type: String,
        required: true
    },
    deviceName: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    date: {
        type: Number,
        required: true
    },
    month: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    hour: {
        type: Number,
        required: true
    },
    minute: {
        type: Number,
        required: true
    },
    second: {
        type: Number,
        required: true
    }
})

mongoose.model("Activity", activitySchema);