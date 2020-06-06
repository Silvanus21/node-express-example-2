const express = require('express')
const http = require('http');
const morgan = require("morgan");
const bodyParser = require("body-parser");

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());

// code for REST end point /dishes.

app.all("/dishes" ,(req, res, next) => {
    res.statusCode = 200;
    res.setHeader("content-type" , "text/plain");
    next();
})

app.get("/dishes", (req, res, next) => {
    res.end("This is will give all the dishes to you.");
})

app.post("/dishes", (req, res, next) => {
    res.end("will add the dish" + req.body.name + " with details : " + req.body.description)
})

app.put("/dishes", (req, res, next) => {
    res.statusCode = 403;
    res.end("Not able to perform this request on /dishes");
})

app.delete("/dishes", (req, res, next) => {
    res.end("deleting all the dishes.")
})

// code for REST end point /dishes ends.

// code for REST end pont /dishes/:dishId

app.get("/dishes/:dishId", (req, res, next) => {
    res.end(`This is will give the dish with ID : ${req.params.dishId}`);
})

app.post("/dishes/:dishId", (req, res, next) => {
    res.statusCode = 403
    res.end(`post operation not supported on /dishes/ ${req.params.dishId}`)
})

app.put("/dishes/:dishId", (req, res, next) => {
    res.write(`updating the dish : ${req.params.dishId} \n`);
    res.end(`will update the dish : ${req.body.name} with details : ${req.body.description}`);
})

app.delete("/dishes/:dishId", (req, res, next) => {
    res.end(`this will delete the dish having Id : ${req.params.dishId}`)
})

// code for REST end pont /dishes/:dishId ends...


// serving the page in local host 3000

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});