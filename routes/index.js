const subscribeRouter = require("./subscribe");
const initRoutes = (app) => {
  app.use("/api/pms", subscribeRouter);
};

module.exports = initRoutes;
