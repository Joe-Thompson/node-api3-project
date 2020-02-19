const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.send(`
    <h1>Node Project 3 API</h1>
    `)
});

module.exports = router;
