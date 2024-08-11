const express = require('express');
const app = express();
var cors = require('cors')

//routes import
const twilioRouter = require('./routes/twilioapp');
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth')
const contextRouter = require('./routes/context');
const aiRouter = require('./routes/ai');

//config
require('dotenv').config();
const port = process.env.PORT || 3000;
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());
app.use(cors())

//routes
app.use('/', indexRouter);
app.use('/api/v1/twilio', twilioRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/context', contextRouter);
app.use('/api/v1/ai', aiRouter);

//server initialiser
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});