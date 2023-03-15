const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    if (conn.connection.readyState === 0) {
      console.log("DB disconnected");
    } else if (conn.connection.readyState === 1) {
      console.log("DB connected");
    } else if (conn.connection.readyState === 2) {
      console.log("DB connecting");
    } else {
      console.log("disconnecting");
    }
    // console.log("Connect successfully");
  } catch (err) {
    console.log("Connect db erorr " + err);
  }
};

module.exports = dbConnect;
