import express from "express";
import { v4 as uuidv4 } from "uuid";
const Router = express.Router();
// All the routes start with /user

let userData = [
  {
    name: "Dheeraj",
    age: 12,
    salary: 1212888,
    id: "6436d399-3820-4ba6-ac92-59f05c653407",
  },
  {
    name: "Rahul",
    age: 22,
    salary: 12888,
    id: "d45ef371-00b0-4077-81fa-86a6afb24a31",
  },
  {
    name: "Ravi",
    age: 24,
    salary: 128388,
    id: "d45ef271-00b0-4077-81fa-86a6afb24a31",
  },
];

// get all users
Router.get("/", (req, res) => {
  res.send(userData);
});

// Add new users
Router.post("/", (req, res) => {
  let userName = req.body;
  userData.push({ ...req.body, id: uuidv4() });
  res.send(`${userName.name} saved in database`);
});

// find user by given id
Router.get("/:id", (req, res) => {
  const foundUser = userData.find((user) => {
    return user.id === req.params.id;
  });
  res.send(foundUser);
});

// find user by id and delete that user
Router.delete("/:id", (req, res) => {
  let newUsers = userData.filter((user) => {
    return user.id !== req.params.id;
  });
  res.send(`user with id : ${req.params.id} deleted from the database.`);
});

// modified user by selecting ID

Router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const UpdatedUser = userData.find((user) => user.id === id);
  const { name, age, salary } = req.body;

  if (name) UpdatedUser.name = name;
  if (age) UpdatedUser.age = age;
  if (salary) UpdatedUser.salary = salary;
  res.send(`User With the id:${id} has been updated`);
});

export default Router;
