const { v4: uuidv4 } = require("uuid");

let user = [];

module.exports = {
  getUser: (req, res) => {
    res.send(user);
  },
  addUser: (req, res) => {
    let users = req.body;
    user.push({ ...users, id: uuidv4() });
    res.send("USER HAS BEEN ADDED ");
  },

  getById: (req, res) => {
    const { id } = req.params;

    const userToGet = user.find((e) => e.id == id);
    res.send(userToGet);
  },

  deleteById: (req, res) => {
    const { id } = req.params;
    user = user.filter((e) => e.id !== id);
    res.send(`user deleted`);
  },

  updateInfo: (req, res) => {
    const { id } = req.params;
    const { name, age, place } = req.body;
    const paruser = user.find((e) => e.id == id);
    if (name) {
      paruser.name = name;
    }

    if (age) {
      paruser.age = age;
    }

    if (place) {
      paruser.place = place;
    }

    res.send(`YOUR INFORMATION HAS BEEN MODIFIED`);
  },
};
