const Sequelize = require("sequelize");
const knex = require("knex");
const { sqldb } = require("./");

const appDB = new Sequelize(
    sqldb.dbName,
    sqldb.dbUsername,
    sqldb.dbPassword,
    {
        host:sqldb.dbHost,
        dialect:sqldb.dbDialect,
        timezone: '-05:00', // Timezone,
        pool:{
            max: 50,
            min: 1,
            acquire: 60000,
            idle: 10000
        },
        logging: console.log
    }
);

let mysql = knex({
    client: 'mysql',
    connection: {
        host: sqldb.dbHost,
        user: sqldb.dbUsername,
        password: sqldb.dbPassword,
        database: sqldb.dbName
    },
    pool: { min: 0, max: 7 }
  });



class Database {
    static client;
    constructor(){
        if(Database.client){
            return Database.client;
        }
        Database.client = mysql;
        this.client = Database.client;
    }
}

module.exports = new Database().client;