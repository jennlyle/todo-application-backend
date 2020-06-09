const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/tasks", function(req, res) {
  res.send({ tasks: ["water plants", "do dishes", "buy oats"] });
});

app.post("/tasks", function(req, res) {
  const text = req.body.text;
  const date = req.body.date;

  res.json({
    message: `Received a request to add task ${text} with date ${date}`
  });
});

module.exports.handler = serverless(app);