const {Sequelize} = require("sequelize");
const config = require("./../utils/config/db")
const datainit = require("./../utils/datainit/index");


const sequelize = new Sequelize(
    config.db.database,
    config.db.username,
    config.password,
    {
        host: config.db.host,
        dialect: config.db.dialect,
    }, 
);

dbcontext.sequelize = sequelize;

require('./../models/version/version.model');

sequelize.authenticate().then(() => {
    console.log('Connected to mysql!');
}).catch(error => {
    console.error('Could not connect to mysql!');
    console.error(error);
}
);

sequelize.sync({ force: config.db.delete }).then(() => {
    datainit.initialize()
}).catch((error) => {
console.error(error);
});