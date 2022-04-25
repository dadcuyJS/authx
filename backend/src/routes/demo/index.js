const router = require("express").Router();

router.get("/", (req, res) => res.send({ code: 200, message: "Hello World" }));

module.exports = router;
