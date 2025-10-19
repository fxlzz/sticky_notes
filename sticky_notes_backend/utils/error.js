const { formatResponse } = require("./tools");

// 统一处理错误格式
class ServiceError extends Error {
  constructor(msg, code) {
    super(msg);
    this.code = code;
  }

  toResponseJSON() {
    return formatResponse(this.code, this.msg, null);
  }
}

// 验证错误
class ValidationError extends ServiceError {
  constructor(message) {
    super(message, 406);
  }
}

// 未知错误
class UnknownError extends ServiceError {
  constructor() {
    super("server internal error", 500);
  }
}

module.exports = {
  ServiceError,
  ValidationError,
  UnknownError,
};
