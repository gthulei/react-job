const RES = require('./ServerResponse')

const isAuthenticated = function (req,res,next) {
  if(!req.session.user){
    res.status(401);
    res.json(RES.responseErrorData('未登录,或者过期,请重新登录','0000401'));
  }else {
    next();
  }
}

module.exports = isAuthenticated