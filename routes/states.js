const express = require("express");
const router = express.Router();

const {getAllState} = require("../controllers/states");


router.route("/").get(getAllState);



module.exports = router;