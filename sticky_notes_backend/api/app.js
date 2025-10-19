const express = require("express");
const cors = require("cors");

const app = express();
const noteRouter = require("./routes/api/notes");
const { ServiceError, UnknownError } = require("./utils/error");

// 连接数据库
require("./db/init");

app.use(cors({ origin: "*" }));

// 处理请求格式
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 路由中间件
app.use("/note", noteRouter);

// 处理其他错误
app.use(function (err, req, res, next) {
  if (err instanceof ServiceError) {
    res.send(err.toResponseJSON());
  } else {
    res.send(new UnknownError().toResponseJSON());
    throw err;
  }
});

module.exports = app;

// app.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });
