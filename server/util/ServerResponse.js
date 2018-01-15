class ServerResponse {
  constructor(errorMessage, errorCode, succeed, data) {
    this.errorMessage = errorMessage;
    this.errorCode = errorCode;
    this.succeed = succeed;
    this.data = data;
  }

  static responseSuccees() {
    return new ServerResponse("成功", "0000000", true, null);
  }

  static responseSucceesData(data) {
    return new ServerResponse("成功", "0000000", true, data);
  }

  static responseError() {
    return new ServerResponse("失败", "0000010", false, null);
  }

  static responseErrorData(errorMessage, errorCode) {
    return new ServerResponse(errorMessage, errorCode, false, null);
  }

  static response(errorMessage, errorCode, succeed, data) {
    return new ServerResponse(errorMessage, errorCode, succeed, data);
  }

}

module.exports = ServerResponse;
