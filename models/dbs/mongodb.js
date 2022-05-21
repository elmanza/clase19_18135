const res = require("express/lib/response");
let {mongoose} = require("../../config/mongodb");

let {Schema, model} = mongoose;

let OperacionShema = new Schema({
    type: {type:String, required:true},
    params: {type:String, required:true},
    res: {type:String, required:true},
    timestamp: {type:String, required:true}
});

let OperacionModel= new model('operaciones', OperacionShema)

class MongoDB {
    async create(obj){
        try {
            let res = await OperacionModel.create(obj);
            return res;
        } catch (error) {
            console.log(error);
        }
    }

    async getall(){
        try {
            let res = await OperacionModel.find({});
            return res;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new MongoDB();