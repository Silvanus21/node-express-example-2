const express = require('express')
const http = require('http');
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dishRouter = require("./routes/dishRouter")

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());

// code for REST end point /dishes.

app.use("/dishes", dishRouter);

// code for REST end pont /dishes/:dishId

app.use("/dishes/:dishId", dishRouter);

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