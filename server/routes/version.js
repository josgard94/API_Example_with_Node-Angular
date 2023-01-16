let versionCtr = require("../controllers/version/version.controller");
let path ="/api/"
module.exports = function(app){
    app.route(path+'version').get(versionCtr.version)
}