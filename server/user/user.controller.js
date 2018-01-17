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
              res.json(RES.response('注册成功', '0000000', true, {_id: user._id, type: user.type}));
            }).catch(_err => {
            res.json(RES.responseErrorData('服务器异常', '0000500'));
            E.err(_err);
          });
        }
      }).catch(_err => {
      res.json(RES.responseErrorData('服务器异常', '0000500'));
      E.err(_err);
    });
  },
  userInfo(req, res) {
    if (req.session.user) {
      let {username,type,_id} = req.session.user;
      res.json(RES.response('查询成功', '0000000', true, {username,type,_id}));
    } else {
      res.json(RES.responseErrorData('查询失败', '000010'));
    }
  },
  seveInforMation(req, res) {
    JDBC.select(DB.userInfoModel, {userid: req.body.userid})
      .then(userRes => {
        if (userRes) {
          JDBC.update(DB.userInfoModel,{userid: req.body.userid},req.body)
            .then(_res => {
              if (_res) {
                res.json(RES.responseSucceesData(req.body));
              } else {
                res.json(RES.responseError());
              }
            })
        } else {
          JDBC.insert(DB.userInfoModel, req.body)
            .then(_res => {
              if (_res) {
                res.json(RES.responseSuccees());
              } else {
                res.json(RES.responseError());
              }
            }).catch(_err => {
            res.json(RES.responseErrorData('服务器异常', '0000500'));
            E.err(_err);
          });
        }
      }).catch(_err => {
      res.json(RES.responseErrorData('服务器异常', '0000500'));
      E.err(_err);
    });
  },
  findInforMation(req, res) {
    JDBC.select(DB.userInfoModel, {userid: req.body.userid})
      .then(_res => {
        if (_res) {
          res.json(RES.responseSucceesData(_res));
        } else {
          res.json(RES.responseError());
        }
      }).catch(_err => {
      res.json(RES.responseErrorData('服务器异常', '0000500'));
      E.err(_err);
    });
  }
}