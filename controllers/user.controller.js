/*jshint esversion : 8 */
const userModel = require("../models/user.model");

const getAllUsers = (req, res) => {
  userModel.find((err, users) => {
    if (err) {
      console.log(err.message);
    } else {
      res.render("index", { users });
      console.log(users);
    }
  });
};

const getAddUser = (req, res) => {
  res.render("adduser");
};

const postAddUser = async (req, res) => {
  let url = await req.file.path;
  let obj = {
    name: req.body.name,
    times: parseInt(req.body.times),
    image: url,
  };
  console.log(obj);
  let form = new userModel(obj);
  form.save((err) => {
    if (err) {
      console.log(err.message);
    } else {
      res.redirect("/");
    }
  });
};

const incrementTimes = (req, res) => {
  console.log(req.params.id);

  userModel.findById(req.params.id, (err, obj) => {
    console.log(obj);
  });

  userModel.findByIdAndUpdate(
    req.params.id,
    { $inc: { times: 1 } },
    (err, obj) => {
      if (err) {
        console.log(err.message);
      } else {
        res.redirect("/");
      }
    }
  );
};

const decrementTimes = (req, res) => {
  console.log(req.params.id);
  console.log(req.params.times);
  if (req.params.times > 1) {
    userModel.findByIdAndUpdate(
      req.params.id,
      { $inc: { times: -1 } },
      (err, obj) => {
        if (err) {
          console.log(err.message);
        } else {
          res.redirect("/");
        }
      }
    );
  } else {
    res.redirect("/");
  }
};

const deleteUser = (req, res) => {
  userModel.findByIdAndDelete(req.params.id, (err, result) => {
    if (err) {
      console.log(err.message);
    } else {
      res.redirect("/");
    }
  });
};


module.exports = {
    getAllUsers,
    getAddUser,
    postAddUser,
    incrementTimes,
    decrementTimes,
    deleteUser
};