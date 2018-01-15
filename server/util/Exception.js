module.exports = {
  err(err){
    if(Object.prototype.toString.call(value).slice(8, -1) == 'Object'){
      var errRes = JSON.stringify(err);
    }
    throw new Error(errRes);
  }
}