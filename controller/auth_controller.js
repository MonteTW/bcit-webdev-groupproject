const passport = require("../middleware/passport");
const { userModel } = require("../models/userModel");
const { v4: uuid } = require('uuid');

let authController = {
  login: (req, res) => {
    res.render("auth/login");
  },

  register: (req, res) => {
    res.render("auth/register");
  },

  loginSubmit: passport.authenticate("local", { failureRedirect: '/auth/login', successRedirect: '/reminders'      
  }),
  admin: (req, res) => {
    req.sessionStore.all((err, sessions)=> {
      if (err) {
        console.log(err)
      } else {
        res.render("auth/admin", {
          user: req.user,
          sessions
        })
      }
    })
  },
  revoke: (req, res) => {
    const revokeId = req.body.sessionId
    console.log(revokeId)
    req.sessionStore.destroy(revokeId, (err,any) => {})
    res.redirect('/admin')
  },
  // loginSubmit: (req, res) => {
  //   console.log("req",req);
  // },

// making register submit
registerSubmit: async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send('All fields (name, email, password) are required!');
  }

  try {
    const existingUser = await userModel.findOne(email);
    if (existingUser) {
      console.log(userModel.database)
      return res.status(400).send('Email is already registered!');
    } else {
      const newUser = {
        // unique id module
      id: uuid(),
      name,
      email,
      password,
      role: 'user',
      reminders: [],
    };
    console.log(userModel.database)
    console.log(newUser)
    userModel.database.push(newUser);
    console.log(userModel.database)
    res.redirect('/auth/login'); }
  } catch (err) {
    console.error(err);
}
}
}

module.exports = authController;
