const db = require('../model/model');
const Jdbc = require('../jdbcTemplate');


module.exports = {
  login(req, res) {
    Jdbc.select(db.userModel, req.body)
      .then((_res) => {
        if (_res) {
          res.json({
            errorCode: "0000000",
            errorMessage: "登录成功",
            succeed: true,
            data: _res
          })
        } else {
          res.json({
            errorCode: "000010",
            errorMessage: "帐号或密码错误",
            succeed: false,
            data: null
          })
        }
      }).catch(() => {
      res.json({
        errorCode: "0000500",
        errorMessage: "数据库异常",
        succeed: false,
        data: null
      })
    })
  },
  register(req, res) {

  }
}