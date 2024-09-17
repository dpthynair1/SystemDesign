import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.all("/", (req, res) => {
  //   console.log("Request >", req);
  //   console.log("Response >", res);
  res.send(`I'm up!`);
});

const todos = [
  {
    id: 1,
    task: "Task 1",
    completed: true,
  },
  {
    id: 2,
    task: "Task 2",
    completed: true,
  },
];

app.get("/todos", (req, res) => {
  res.send(todos);
});
app.post("/todos", (req, res) => {
  const newTodo = req.body;
  console.log("newTodo", newTodo);
  todos.push(newTodo);
  res.json({
    message: "New Todo added",
  });
});

app.put("/todos/:id", (req, res) => {
  const newTodoData = req.body;
  const todoIndex = todos.findIndex((todo) => todo.id === req.params.id);

  if (todoIndex !== -1) {
    todos[todoIndex] = {
      id: req.params.id,
      ...newTodoData,
    };
  }
  res.json({
    message: "Todo updated successfully",
  });
});

app.delete("/todos/:id", (req, res) => {
  console.log(req.params.id);
  const todoIndex = todos.findIndex((todo) => todo.id === req.params.id);
  console.log(todoIndex);
  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1);
  }
  res.json({
    message: "deleted successfully",
  });
});
const PORT = 5111;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
