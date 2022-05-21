const ApiOperaciones = require("../components/operaciones");


module.exports = app =>{
    ApiOperaciones(app);
    app.get("/", (req, res)=> res.send("OK!"));
}