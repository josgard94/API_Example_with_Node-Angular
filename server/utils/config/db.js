module.exports = {
    db: {
        dialect: 'mysql',
        host: 'localhost',
        username: 'root',
        password: '',
        database: 'example',
        delete: true,
        logging: false,
        dialectOptions: {
          useUTC: true
        },
        timezone: 'UTC'
      }
}