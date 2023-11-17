const express = require("express");
const router = express.Router();

router.get('/home', async (req, res) => {
    try {
        res.status(200).send(req.body)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router;