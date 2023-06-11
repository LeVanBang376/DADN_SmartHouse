const express = require('express');
const activityRouter = express.Router();
const mongoose = require('mongoose');
const Activity = mongoose.model("Activity");
const jwt = require('jsonwebtoken');

require('dotenv').config();

activityRouter.post('/addactivity', async (req, res) => {
    console.log('add activity is sent by client - ', req.body);
    const { userDbId, roomName, deviceName, state, date, month, year, hour, minute, second } = req.body;


    const newActivity = new Activity({
        userDbId,
        roomName,
        deviceName,
        state,
        date,
        month,
        year,
        hour,
        minute,
        second
    })

    try {
        await newActivity.save();
        const token = jwt.sign({ _id: newActivity._id }, process.env.JWT_SECRET);
        res.send({ message: "Add Activity Successfully", token });
        console.log("Add Activity Successfully")
    }
    catch (err) {
        console.log(err);
    }
})

activityRouter.post('/getactivities', async (req, res) => {
    console.log('get all activities is sent by client - ');
    const { userDbId } = req.body;
    try {
        const activities = await Activity.find({ userDbId: userDbId })
        if (activities.length === 0) {
            return res.status(422).json({ error: "Invalid Credentials" });
        } else {
            console.log(activities)
            res.send(activities);
        }
    }
    catch (err) {
        console.log(err);
    }
})

module.exports = activityRouter;