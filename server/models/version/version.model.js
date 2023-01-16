const Sequelize = require('sequelize');

const version = dbcontext.sequelize.define(
    'version',
    {
        id:{
            type:Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        versionNumber:{
            type: Sequelize.STRING,
            allowNull: false
        }
    }
); dbcontext.version = version; 