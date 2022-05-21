require("dotenv").config();


let config = {
    port: process.env.PORT,
    persistencia: process.env.PERSISTENCIA
}

let mongodb = {
    uri: process.env.MONGO_DB_URI,
    name: process.env.DB_NAME,
    mongo_atlas: process.env.MONGO_ATLAS
}

let sqldb = {
    dbUsername: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbDialect: process.env.DB_DIALECT
}

module.exports = { config, mongodb, sqldb };