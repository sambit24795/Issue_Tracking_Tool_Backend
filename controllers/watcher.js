const Watcher = require("../models/watcher");
const User = require("../models/user");

exports.createWatcher = (req, res, next) => {
  const watcher = new Watcher({
    issueId: req.body.issueId,
    userId: req.body.userId,
    email: req.body.email 
  });
  console.log("watcher", watcher);
  watcher
    .save()
    .then(created => {
      res.status(201).json({
        message: "this user is a watcher for this issue",
        data: created
      });
    })
    .catch(err => {
      res.status(404).json({
        message: "you are already a watcher",
        error: err
      });
    });
};

exports.getWatcher = (req, res, next) => {
  Watcher.find({ issueId: req.params.issueId })
    .then(watcherList => {
      res.status(200).json({
        message: "WatcherList retrieved Successfully!!!",
        data: watcherList
      });
    })
    .catch(err => {
      res.status(404).json({
        message: "error in retrieving watcher list",
        error: err
      });
    });
};
