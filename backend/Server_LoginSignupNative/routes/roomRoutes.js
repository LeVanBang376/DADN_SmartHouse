const express = require('express');
const roomRouter = express.Router();
const mongoose = require('mongoose');
const Room = mongoose.model("Room");
const jwt = require('jsonwebtoken');

require('dotenv').config();

roomRouter.post('/addroom', async (req, res) => {
    console.log('addroom is sent by client - ', req.body);
    const { roomName, roomType, userDbId, roomId } = req.body;

    // const rooms = await Room.find({ userDbId: userDbId })

    const newRoom = new Room({
        roomName,
        roomType,
        userDbId,
        roomId
    })
    try {
        const findRoomName = await Room.findOne({ userDbId: userDbId, roomName: roomName })
        if (findRoomName) {
            return res.status(422).json({ error: "RoomName already exist" });
        } else {
            const findRoomId = await Room.findOne({ userDbId: userDbId, roomId: roomId })
            if (findRoomId) {
                return res.status(422).json({ error: "RoomID already exist" });
            } else {
                await newRoom.save();
                const token = jwt.sign({ _id: newRoom._id }, process.env.JWT_SECRET);
                res.send({ message: "Add Room Successfully", token });
            }
        }
    }
    catch (err) {
        console.log(err);
    }
})

roomRouter.post('/changeroom', async (req, res) => {
    console.log('changeroom is sent by client - ', req.body);
    const { userDbId, oldRoomName, roomName, roomType, roomId, oldRoomId } = req.body;

    try {
        const findRoomName = await Room.findOne({ userDbId: userDbId, roomName: oldRoomName, roomId: oldRoomId })
        if (!findRoomName) {
            return res.status(422).json({ error: "Invalid Credentials" });
        } else {
            const findNewRoomName = await Room.findOne({ userDbId: userDbId, roomName: roomName })
            const findNewRoomId = await Room.findOne({ userDbId: userDbId, roomId: roomId })
            if (findNewRoomName) {
                if (findNewRoomName._id.toString() != findRoomName._id.toString())
                    return res.status(422).json({ error: "Name's exist" });
                else {
                    await Room.findOneAndUpdate({ roomName: oldRoomName }, { roomName: roomName, roomType: roomType, roomId: roomId });
                    res.send({ message: "Change Room Successfully" });
                }
            } else if (findNewRoomId) {
                if (findNewRoomId._id.toString() != findRoomName._id.toString())
                    return res.status(422).json({ error: "Id's exist" });
                else {
                    await Room.findOneAndUpdate({ roomName: oldRoomName }, { roomName: roomName, roomType: roomType, roomId: roomId });
                    res.send({ message: "Change Room Successfully" });
                }
            } else {
                await Room.findOneAndUpdate({ roomName: oldRoomName }, { roomName: roomName, roomType: roomType, roomId: roomId });
                res.send({ message: "Change Room Successfully" });
            }

        }
    }
    catch (err) {
        console.log(err);
    }
})

roomRouter.post('/getrooms', async (req, res) => {
    console.log('get all room is sent by client - ');
    const { userDbId } = req.body

    try {
        const rooms = await Room.find({ userDbId: userDbId })
        if (rooms.length === 0) {
            return res.status(422).json({ error: "Invalid Credentials" });
        } else {
            console.log(rooms)
            res.send(rooms);
        }
    }
    catch (err) {
        console.log(err);
    }
})

roomRouter.delete('/deleteroom', async (req, res) => {
    const { userDbId, roomId } = req.body
    console.log('a')
    try {
        await Room.deleteOne({ userDbId: userDbId, roomId: roomId })
        res.send({ content: "success" })
    } catch (err) {
        console.log(err)
    }
})

module.exports = roomRouter;