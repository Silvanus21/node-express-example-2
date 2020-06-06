const express = require("express");
const bodyParser = require("body-parser");
const routertest = express.Router();

routertest.use(bodyParser.json())

routertest.route("/")
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader("content-type", "text/plain");
        next();
    })
    .get((req, res, next) => {
        if (req.url == "/dishes") {
            res.end('Will send all the dishes to you!');
        }
        else {
            res.end(`Will send details of the dish: ${req.params.dishId} to you`);
        }
    })
    .post((req, res, next) => {
        if (req.url === "/dishes") {
            res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body
                .description)
        }
        else {
            res.statusCode = 403
            res.end(`post operation not supported on /dishes/${req.params.dishId}`)
        }
    })
    .put((req, res, next) => {
        if (req.url === "/dishes") {
            res.statusCode = 403;
            res.end('PUT operation not supported on /dishes');
        }
        else {
            res.write(`Updating the dish: ${req.params.dishId} \n`);
            res.end(`Will update the dish: ${req.body.name} with details: ${req.body.description}`);
        }
    })
    .delete((req, res, next) => {
        if (req.url === "/dishes") {
            res.end('Deleting all dishes')
        }
        else {
            res.end(`Deleting the dish: ${req.params.dishId}`)
        }
    })


module.exports = routertest;




