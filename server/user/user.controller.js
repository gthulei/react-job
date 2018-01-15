const DB = require('../model/model');
const JDBC = require('../util/jdbcTemplate');
const RES = require('../util/ServerResponse')
const E = require('../util/Exception');
const MD5 = require('md5');

module.exports = {
  login(req, res) {
    req.body.password = MD5(req.body.password);
    JDBC.select(DB.userModel, req.body)
      .then((_res) => {
        if (_res) {
          req.session.user = _res;
          res.json(RES.response('登录成功', '0000000', true, _res));
        } else {
          res.json(RES.responseErrorData('帐号或密码错误', '000010'));
        }
      }).catch(_err => {
      res.json(RES.responseErrorData('服务器异常', '0000500'));
      E.err(_err);
    });
  },
  register(req, res) {
    JDBC.select(DB.userModel, {username: req.body.username})
      .then(_res => {
        if (_res) {
          res.json(RES.responseErrorData('用户名已存在', '000010'));
        } else {
          req.body.password = MD5(req.body.password);
          JDBC.insert(DB.userModel, req.body)
            .then(user => {
              req.session.user = user;
              res.json(RES.response('注册成功', '0000000', true, {_id:user._id,type:user.type}));
            }).catch(_err => {
            res.json(RES.responseErrorData('服务器异常', '0000500'));
            E.err(_err);
          });
        }
      }).catch(_err => {
      res.json(RES.responseErrorData('服务器异常', '0000500'));
      E.err(_err);
    });
  }
}