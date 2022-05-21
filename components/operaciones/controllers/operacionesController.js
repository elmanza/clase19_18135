let opServices = require("../services/operacionesService");

class Operaciones {

    async op(req, res, next){
        let {a, b, operacion} = req.params;
        let response = await opServices.realizeOp(Number(a),Number(b),operacion);    
        res.json(response);
    }

    async getall(req, res, next){
        let response = await opServices.getAllOp();  
        res.json(response);
    }
}

module.exports = new Operaciones();