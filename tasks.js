const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/tasks", function(req, res) {
  // const text = req.body.text;
  // const completed = req.body.completed;
  // const date = req.body.date;
  // const id = req.body.id;

  const myGetTasksDummyData = { "tasks": {
    "task": [
      {
        "text": "sweep floor",
        "completed": true,
        "date": "2019-10-10",
        "id": 1
      }, 
      {
        "text": "wash car",
        "completed": false,
        "date": "2019-10-09",
        "id": 2
      }, 
      {
        "text": "buy cat food",
        "completed": true,
        "date": "2019-10-08",
        "id": 3
      }, 
      {
        "text": "wash dishes",
        "completed": true,
        "date": "2019-10-08",
        "id": 4
      }, 
    ]}
  };
  res.status(200).send(myGetTasksDummyData);
});

app.post("/tasks", function(req, res) {
  const text = req.body.text;
  const date = req.body.date;

  res.json({
    message: `Received a request to add task ${text} with date ${date}`
  });
});

app.delete("/tasks/:taskId", function(req, res) {
  const id = req.params.taskId;

  // res.json({
  //   message: `Received a request to delete task ${id}`
  // });

  res.status(200).send(`You issued a delete request for ID: ${id}`);


});

app.put("/tasks/:taskId", function(req, res) {
  const id = req.params.taskId;

  res.json({
    message: `Received a request to update task ${id}`
  });
});

module.exports.handler = serverless(app);