const express = require("express");
const dbConnect = require("./config/dbConnect");
const initRoutes = require("./routes");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
//express doc hieu data client gui len
app.use(express.json());
//Doc duoc data theo kieu object array
app.use(express.urlencoded({ extended: true }));

dbConnect();
initRoutes(app);

app.use("/", (req, res) => {
  res.send("SERVER ON");
});

app.listen(5000, () => {
  console.log("Server is running on port " + port);
});
