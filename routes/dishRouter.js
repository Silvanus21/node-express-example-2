const express = require("express");
const bodyParser = require("body-parser");
const dishRouter = express.Router();

dishRouter.use(bodyParser.json())

dishRouter.route("/")
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader("content-type", "text/plain");
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the dishes to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body
            .description)
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /dishes');
    })
    .delete((req, res, next) => {
        res.end('Deleting all dishes')
    })
    .get((req, res, next) => {
        res.end(`This is will give the dish with ID : ${req.params.dishId}`);
    })
    .post((req, res, next) => {
        res.statusCode = 403
        res.end(`post operation not supported on /dishes/ ${req.params.dishId}`)
    })
    .put((req, res, next) => {
        res.write(`updating the dish : ${req.params.dishId} \n`);
        res.end(`will update the dish : ${req.body.name} with details : ${req.body.description}`);
    })
    .delete((req, res, next) => {
        res.end(`this will delete the dish having Id : ${req.params.dishId}`)
    })

module.exports = dishRouter;