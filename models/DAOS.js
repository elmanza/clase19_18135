let {config} = require("../config");
let sql = require("./dbs/sqldb");
let Document = require("./dbs/handlerDocumentDB");
let mongo = require("./dbs/mongodb");

class DAOS {
    constructor(){
        if(config.persistencia == 'archivo') {
            let document= new Document('example.json');
            this.db = document;
        }else if(config.persistencia == 'sql'){
            this.db = sql;
        }else if(config.persistencia == 'mongo'){
            this.db = mongo;
        }
    }

    async create (obj){
        try {
            return this.db.create(obj);
        } catch (error) {
            console.log(error);
        }
    }


    async getall(){
        try {
            return this.db.read();
        } catch (error) {
            console.log(error);
        }
    }

    async getOne(id){
        try {
            return this.db.read(id);
        } catch (error) {
            console.log(error);
        }
    }


}

module.exports = new DAOS();