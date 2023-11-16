const express = require("express");

const router = express.Router();

/* router.get('/employee/:empId?', (req ,res, next) => {
    const params = req.params.empId
    const query = req.query
    const body = req.body

    res.json({})
    res.redirect();
    res.status(204).json({})
    next()
    next("sdkjrnfdf")
}, (req, res, next) =>{ 

});
router.post('/employee', (req, res, next) => {
    const body = req.body
}); */

router.get('/employee', async (req, res) => {
    const data = await fetch('https://api.employeed.com', {
        headers: {
            "content-type": json
        }
    })
    res.json(data)
})

module.exports = router;