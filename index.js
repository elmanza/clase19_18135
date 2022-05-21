let express = require("express");
let app = express();
let cors = require("cors");
let { config } = require("./config");
let serverRoutes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use(cors("*"));

serverRoutes(app);

app.listen(config.port, ()=>{
    console.log(`http://localhost:${config.port}`);
})