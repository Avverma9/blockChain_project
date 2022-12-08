const { Router } = require('express');
const express = require('express');
const router = express.Router();
const cryptoController= require("../controller/cryptoController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/getCrypto",cryptoController.getCryptoCurr)
module.exports = router;