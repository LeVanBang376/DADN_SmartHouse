const express = require('express');
const port = 3333;

const app = express();
const bodyParser = require('body-parser');
// 
require('./db');
require('./models/User');
require('./models/Room');
require('./models/Device');
require('./models/Sensor');
require('./models/Activity')
//
const authRoutes = require('./routes/authRoutes');
const roomRoutes = require('./routes/roomRoutes');
const deviceRoutes = require('./routes/deviceRoutes');
const sensorRoutes = require('./routes/sensorRoutes');
const activityRoutes = require('./routes/activityRoutes')
const requireToken = require('./Middlewares/AuthTokenRequired');
app.use(bodyParser.json());
app.use(authRoutes);
app.use(roomRoutes);
app.use(deviceRoutes);
app.use(sensorRoutes);
app.use(activityRoutes);
//

app.get('/', requireToken, (req, res) => {
    res.send('this is home page');
    console.log(req.user);
    res.send(req.user);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})