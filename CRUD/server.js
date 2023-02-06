import express from "express";
import bodyParser from "body-parser";
import useRoutes from "./Routes/User.js";
const app = express();
const port = process.env.PORT || 4000;
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use("/user", useRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
