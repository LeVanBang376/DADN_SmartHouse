const express = require('express');
const sensorRouter = express.Router();
const mongoose = require('mongoose');
const Sensor = mongoose.model("Sensor");
const jwt = require('jsonwebtoken');

require('dotenv').config();

sensorRouter.post('/addsensor', async (req, res) => {
    console.log('add sensor is sent by client - ', req.body);
    const { userDbId, roomId, sensorName, sensorType } = req.body;


    const newSensor = new Sensor({
        sensorName,
        sensorType,
        roomId,
        userDbId
    })

    try {
        const findSensorName = await Sensor.findOne({ userDbId: userDbId, roomId: roomId, sensorName: sensorName })
        if (findSensorName) {
            return res.status(422).json({ error: "Invalid Credentials" });
        } else {
            await newSensor.save();
            const token = jwt.sign({ _id: newSensor._id }, process.env.JWT_SECRET);
            res.send({ message: "Add Sensor Successfully", token });
        }
    }
    catch (err) {
        console.log(err);
    }
})

sensorRouter.post('/changesensor', async (req, res) => {
    console.log('changesensor is sent by client - ', req.body);
    const { userDbId, roomId, oldSensorName, sensorName, sensorType } = req.body;
    try {
        const findSensorName = await Sensor.findOne({ userDbId: userDbId, roomId: roomId, sensorName: oldSensorName })
        if (!findSensorName) {
            return res.status(422).json({ error: "Invalid Credentials" });
        } else {
            const findNewSensorName = await Sensor.findOne({ userDbId: userDbId, roomId: roomId, sensorName: sensorName })
            if (findNewSensorName) {
                if (findNewSensorName._id.toString() != findSensorName._id.toString()) {
                    return res.status(422).json({ error: "Invalid Credentials" });
                } else {
                    await Sensor.findOneAndUpdate({ userDbId: userDbId, roomId: roomId, sensorName: oldSensorName }, {
                        sensorName: sensorName,
                        sensorType: sensorType,
                    });
                    // const token = jwt.sign({ _id: newRoom._id }, process.env.JWT_SECRET);
                    // res.send({ message: "Change Room Successfully", token });
                    res.send({ message: "Change Sensor Successfully" });
                }
            } else {
                await Sensor.findOneAndUpdate({ userDbId: userDbId, roomId: roomId, sensorName: oldSensorName }, {
                    sensorName: sensorName,
                    sensorType: sensorType,
                });
                // const token = jwt.sign({ _id: newRoom._id }, process.env.JWT_SECRET);
                // res.send({ message: "Change Room Successfully", token });
                res.send({ message: "Change Sensor Successfully" });
            }
        }
    }
    catch (err) {
        console.log(err);
    }
})

sensorRouter.post('/getsensors', async (req, res) => {
    console.log('get all sensors is sent by client - ');
    const { userDbId } = req.body;
    try {
        const sensors = await Sensor.find({ userDbId: userDbId })
        if (sensors.length === 0) {
            return res.status(422).json({ error: "Invalid Credentials" });
        } else {
            console.log(sensors)
            res.send(sensors);
        }
    }
    catch (err) {
        console.log(err);
    }
})

sensorRouter.delete('/deletesensor', async (req, res) => {
    const { userDbId, roomId, sensorName } = req.body
    try {
        await Sensor.deleteOne({ userDbId: userDbId, roomId: roomId, sensorName: sensorName })
        res.send({ content: "success" })
    } catch (err) {
        console.log(err)
    }
})

module.exports = sensorRouter;