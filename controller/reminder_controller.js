let {database} = require("../models/userModel");

let remindersController = {
  list: (req, res) => {
    let index_user = database.findIndex((user) => user.id === req.user.id)
    res.render("reminder/index", { reminders: database[index_user].reminders });
  },

  new: (req, res) => {
    res.render("reminder/create");
  },

  listOne: (req, res) => {
    let index_user = database.findIndex((user) => user.id === req.user.id)
    let reminderToFind = req.params.id;
    let searchResult = database[index_user].reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    if (searchResult != undefined) {
      res.render("reminder/single-reminder", { reminderItem: searchResult });
    } else {
      res.render("reminder/index", { reminders: database.cindy.reminders });
    }
  },

  create: (req, res) => {
    let index_user = database.findIndex((user) => user.id === req.user.id)
    let reminder = {
      id: database[index_user].reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      completed: false,
    };
    database[index_user].reminders.push(reminder);
    res.redirect("/reminders");
  },

  edit: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    });
    res.render("reminder/edit", { reminderItem: searchResult });
  },

  update: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
    return reminder.id == reminderToFind;});
    searchResult.title = req.body.title;
    searchResult.description = req.body.description;
    searchResult.completed = req.body.completed === "true";
    res.redirect("/reminders");
    // implement this code
  },

  delete: (req, res) => {
    // Implement this code
    let index_user = database.findIndex((user) => user.id === req.user.id)
    let reminderToFind = req.params.id;
    let index_reminder = database[index_user].reminders.findIndex((reminder) => reminder.id == reminderToFind);
    database[index_user].reminders.splice(index_reminder,1)
    res.redirect("/reminders")
  },
};

module.exports = remindersController;
