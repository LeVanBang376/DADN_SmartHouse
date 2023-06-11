const express = require('express');
const deviceRouter = express.Router();
const mongoose = require('mongoose');
const Device = mongoose.model("Device");
const jwt = require('jsonwebtoken');

require('dotenv').config();

deviceRouter.post('/adddevice', async (req, res) => {
    console.log('add device is sent by client - ', req.body);
    const { userDbId, roomId, deviceName, deviceType, relay } = req.body;


    const newDevice = new Device({
        deviceName,
        deviceType,
        roomId,
        userDbId,
        relay,
        state: 'off',
        timeAuto: 'off',
        sensorAuto: 'off',
        onHour: 0,
        onMin: 0,
        offHour: 0,
        offMin: 0,
        onSensor: 0,
        offSensor: 0,
    })

    try {
        const findDeviceName = await Device.findOne({ userDbId: userDbId, roomId: roomId, deviceName: deviceName })
        if (findDeviceName) {
            return res.status(422).json({ error: "Name already exists" });
        } else {
            const findRelay = await Device.findOne({ userDbId: userDbId, roomId: roomId, relay: relay })
            if (findRelay) {
                return res.status(422).json({ error: "Relay already exists" });
            } else {
                await newDevice.save();
                const token = jwt.sign({ _id: newDevice._id }, process.env.JWT_SECRET);
                res.send({ message: "Add Device Successfully", token });
            }
        }
    }
    catch (err) {
        console.log(err);
    }
})

deviceRouter.post('/changedevice1', async (req, res) => {
    console.log('changedeivce is sent by client - ', req.body);
    const { userDbId, roomId, oldDeviceName, deviceName, deviceType, relay } = req.body;
    try {
        const findDeviceName = await Device.findOne({ userDbId: userDbId, roomId: roomId, deviceName: oldDeviceName })
        if (!findDeviceName) {
            return res.status(422).json({ error: "Invalid Credentials" });
        } else {
            const findNewDeviceName = await Device.findOne({ userDbId: userDbId, roomId: roomId, deviceName: deviceName })
            if (findNewDeviceName) {
                if (findNewDeviceName._id.toString() != findDeviceName._id.toString()) {
                    return res.status(422).json({ error: "Invalid Credentials" });
                } else {
                    const findNewRelay = await Device.findOne({ userDbId: userDbId, roomId: roomId, relay: relay })
                    if (findNewRelay) {
                        if (findNewRelay._id.toString() != findDeviceName._id.toString()) {
                            return res.status(422).json({ error: "Invalid Credentials" });
                        } else {
                            await Device.findOneAndUpdate({ userDbId: userDbId, roomId: roomId, deviceName: oldDeviceName }, {
                                deviceName: deviceName,
                                deviceType: deviceType,
                                relay: relay
                            });
                            res.send({ message: "Change Device Successfully" });
                        }
                    } else {
                        await Device.findOneAndUpdate({ userDbId: userDbId, roomId: roomId, deviceName: oldDeviceName }, {
                            deviceName: deviceName,
                            deviceType: deviceType,
                            relay: relay,
                        });
                        res.send({ message: "Change Device Successfully" });
                    }
                }
            } else {
                await Device.findOneAndUpdate({ userDbId: userDbId, roomId: roomId, deviceName: oldDeviceName }, {
                    deviceName: deviceName,
                    deviceType: deviceType,
                });
                res.send({ message: "Change Device Successfully" });
            }
        }
    }
    catch (err) {
        console.log(err);
    }
})

deviceRouter.post('/changedevice2', async (req, res) => {
    console.log('changedeivce is sent by client - ', req.body);
    const { userDbId, roomId, deviceName, state, timeAuto, sensorAuto, onHour, onMin, offHour, offMin, onSensor, offSensor } = req.body;
    try {
        const findDeviceName = await Device.findOne({ userDbId: userDbId, roomId: roomId, deviceName: deviceName })
        if (!findDeviceName) {
            return res.status(422).json({ error: "Invalid Credentials" });
        } else {
            await Device.findOneAndUpdate({ userDbId: userDbId, roomId: roomId, deviceName: deviceName }, {
                state: state,
                timeAuto: timeAuto,
                sensorAuto: sensorAuto,
                onHour: onHour,
                onMin: onMin,
                offHour: offHour,
                offMin: offMin,
                onSensor: onSensor,
                offSensor: offSensor
            });
            res.send({ message: "Change Device Successfully" });
        }

    }
    catch (err) {
        console.log(err);
    }
})

deviceRouter.post('/getdevices', async (req, res) => {
    console.log('get all room is sent by client - ');
    const { userDbId } = req.body;
    try {
        const devices = await Device.find({ userDbId: userDbId })
        if (devices.length === 0) {
            return res.status(422).json({ error: "Invalid Credentials" });
        } else {
            console.log(devices)
            res.send(devices);
        }
    }
    catch (err) {
        console.log(err);
    }
})

deviceRouter.delete('/deletedevice', async (req, res) => {
    const { userDbId, roomId, deviceName } = req.body
    try {
        await Device.deleteOne({ userDbId: userDbId, roomId: roomId, deviceName: deviceName })
        res.send({ content: "success" })
    } catch (err) {
        console.log(err)
    }
})

module.exports = deviceRouter;