const subscribeCtrl = require("../controllers/subscribeCtrl");

const subscribeRouter = require("express").Router();

subscribeRouter.post("/subscribe", subscribeCtrl.sEmail);
subscribeRouter.post("/subscribe-onlyemail", subscribeCtrl.sOnlyEmail);

module.exports = subscribeRouter;
