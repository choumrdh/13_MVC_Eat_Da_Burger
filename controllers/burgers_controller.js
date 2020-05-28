const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", async (req, res)=>{
    const data = await burger.selectAll();
    res.render("index", {burgers: data})
});

module.exports = router;
