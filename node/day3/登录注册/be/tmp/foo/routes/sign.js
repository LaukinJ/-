var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    let {
        username,
        password
    } = req.body
    if (username === '123' && password === '456') {
        res.json({
            status: 1,
            msg: '登录成功'
        });
    } else {
        res.json({
            status: 0,
            msg: '登录失败'
        });
    }
})
module.exports = router;