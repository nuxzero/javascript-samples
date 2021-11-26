const express = require("express");
const app = express();
const Joi = require("joi");

const parameterSchema = Joi.object({
  name: Joi.string().required(),
});

const responseSchema = () => ({
  fieldName: "name",
  dataType: "string",
  description: "Todo name",
});

const schema = (req, res, next) => {
  console.log("do something!");
  next();
};

app.get("/todo", schema, (req, res) => {
  console.log("GET /todo");
  return res.send("ok");
});

app.post("/todo", [schema], (req, res) => {
  return res.send("ok");
});

const routeInfo = (path, method) => ({
  path,
  method,
  describe: parameterSchema.describe(),
});

app.get("/schema", (req, res) => {
  const routes = app._router.stack
    .filter((e) => e.route)
    .map((e) => routeInfo(e.route.path, e.route.stack[0].method));

  return res.send(routes);
});

app.listen(3000, () => console.log("Server start on port 3000"));
