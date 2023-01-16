let express = require("express");
const logger = require("morgan");
const cors = require("cors");

let app = express();

app.use(cors());
global.dbcontext = {};
require('./database');

app.use(logger('dev'));
require('./routes/version')(app);

app.listen(3001, function (){
    console.log("node server running on http://localhost:3001")
})