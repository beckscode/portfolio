var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
	res.send("API is working properly. Not much going on here atm, move along!");
});

module.exports = router;
