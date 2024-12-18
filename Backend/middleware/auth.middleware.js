const userModel = require("../models/user.model");
const blacklistTokenModel = require("../models/blacklistToken.model");
const jwt = require("jsonwebtoken");

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unathorized" });
  }

  const isBlackListed = await blacklistTokenModel.findOne({ token: token });

  if (isBlackListed) {
    return res.status(401).json({ message: "Unathorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findOne({ _id: decoded._id });
    req.user = user;

    return next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports.authCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unathorized" });
  }

  const isBlackListed = await blacklistTokenModel.findOne({ token: token });

  if (isBlackListed) {
    return res.status(401).json({ message: "Unathorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await userModel.findOne({ _id: decoded._id });
    req.captain = captain;

    return next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
