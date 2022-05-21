let oplib = require("oppackagecoderhouse18135profe");
let DAOS = require("../../../models/DAOS");

class Operaciones {

    static dataoperaciones = [];
    async realizeOp(a, b, operacion){
        try {
            let response = oplib[operacion](a,b); 
            let reees = {
                type: operacion,
                params: `${a} y ${b}`,
                res: `${response}`,
                timestamp: new Date().toLocaleDateString()
            }  
            Operaciones.dataoperaciones.push(reees);
            await DAOS.create(reees);
            return {respuesta: `La respuesta de la operacion ${operacion}, entre los números ${a} y ${b} es igual a ${response}`};
        } catch (error) {
            console.log(error);
        }
    }

    async getAllOp(){
        try {
            return Operaciones.dataoperaciones;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new Operaciones();