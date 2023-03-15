const Subscribe = require("../models/subscribe");
const Email = require("../models/subscribe_email");

const subscribeCtrl = {
  sEmail: async (req, res) => {
    const { email, phone } = req.body;

    const isExisted = await Subscribe.findOne({ $or: [{ email }, { phone }] });

    if (isExisted) {
      res.status(400).json("Bạn đã đăng kí với emai này rồi!");
    } else {
      const res1 = await Subscribe.create(req.body);
      res.status(200).json({
        msg: "Đăng kí thành công!",
        data: res1,
      });
    }
  },
  sOnlyEmail: async (req, res) => {
    const { email } = req.body;
    const isExisted1 = await Subscribe.findOne({ email });
    const isExisted2 = await Email.findOne({ email });
    if (isExisted1 || isExisted2) {
      res.status(400).json({
        msg: "Email đã tồn tại!",
      });
    } else {
      const dt = await Email.create(req.body);
      res.status(200).json({
        msg: "Đăng ký thành công",
        data: dt,
      });
    }
  },
};

module.exports = subscribeCtrl;
