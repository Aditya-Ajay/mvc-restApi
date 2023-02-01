const express = require("express");
const router = require("../route/userDetails");

const app = express();

const PORT = 8000;

app.use(express.json());

app.use("/user", router);

app.get("/", (req, res) => {
  res.send(`THIS IS THE HOME PAGE`);
});

app.get("/user", (req, res) => {
  res.send("THE USER HAS BEEN GENERATED");
});

app.listen(PORT, () => {
  console.log(`THE PORT IS RUNNING ON ${PORT}`);
});
