const express = require("express");
const bodyParser = require("body-parser");
const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route("/")
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader("content-type", "text/plain");
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the promotions to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body
            .description)
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /promotions');
    })
    .delete((req, res, next) => {
        res.end('Deleting all promotions')
    })



promoRouter.route("/:promId")
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader("content-type", "text/plain");
        next();
    })
    .get((req, res, next) => {
        res.end(`Will send details of the promotion: ${req.params.promId} to you`);
    })
    .post((req, res, next) => {
        res.statusCode = 403
        res.end(`post operation not supported on /promotions/${req.params.promId}`)
    })
    .put((req, res, next) => {
        res.write(`Updating the promotion: ${req.params.promId} \n`);
        res.end(`Will update the promotion: ${req.body.name} with details: ${req.body.description}`);
    })
    .delete((req, res, next) => {
        res.end(`Deleting the promotion: ${req.params.promId}`)
    })


module.exports = promoRouter;