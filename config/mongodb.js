const mongoose = require("mongoose");
const { mongodb } = require("./");

const MONGO_URI = `${mongodb.uri}/${mongodb.name}`;
const MONGO_ATLAS = `${mongodb.mongo_atlas}`;

let connection;
(async ()=>{
    try {
        connection = await mongoose.connect(MONGO_ATLAS, {useNewUrlParser:true,useUnifiedTopology: true });
        console.log("Conexión establecida!");
    } catch (error) {
        console.log(error);
    }
})();


module.exports = { connection, mongoose };