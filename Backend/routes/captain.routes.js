const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const captainController = require("../controllers/captain.controller");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 2 })
      .withMessage("First name must be atleast 3 charcters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be atleast 6 characters long"),
    body("vehicle.color")
      .isLength({ min: 2 })
      .withMessage("Color Must be at least 2 character"),
    body("vehicle.plate")
      .isLength({ min: 2 })
      .withMessage("Plate Must be at least 2 character"),
    body("vehicle.capacity")
      .isLength({ min: 1 })
      .withMessage("Capacity Must be at least 1"),
    body("vehicle.vehicleType")
      .isIn(["car", "motorcycle", "auto"])
      .withMessage("Ivalid vehicle type"),
  ],
  captainController.registerCaptain
);

module.exports = router;
