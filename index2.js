const express = require('express')
const http = require('http');
const morgan = require("morgan");
const bodyParser = require("body-parser");

// requiring  all the express routers 
const dishRouter = require("./routes/dishRouter")
const promoRouter = require("./routes/promoRouter")
const leaderRouter = require("./routes/leaderRouter")
const routertest = require("./routes/routertest")

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());

// code for REST API end points /dishes and /dishes/:dishId

app.use("/dishes", dishRouter);
app.use("/dishes/:dishId", dishRouter);

// code for REST API end points /promotions and /promotions/:promId

app.use("/promotions", promoRouter);
app.use("/promotions/:promId", promoRouter);

// code for REST API end points /leaders and /leaders/:leaderId 

app.use("/leader", leaderRouter);
app.use("/leader/:leaderId", leaderRouter);

// if above REST end point doesn't match the actual end point then following gets executed.

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});

// serving the page in local host 3000

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});