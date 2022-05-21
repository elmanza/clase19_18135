let {Router} = require("express");
let opController = require("./controllers/operacionesController");

module.exports = app => {
    let router = new Router();

    app.use("/operaciones", router);
    router.get("/:a/:b/:operacion", opController.op);
    router.get("/getall", opController.getall);
}