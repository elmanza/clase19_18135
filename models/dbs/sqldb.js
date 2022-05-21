let sql = require("../../config/sequelize");

class SQLDB {
    async create(obj){
        try {
            let res = await  sql.from("operaciones").insert(obj);
            return res;
        } catch (error) {
            console.log(error);
        }
    }

    async getall(){
        try {
            // let res = await OperacionModel.find({});
            return true;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new SQLDB();