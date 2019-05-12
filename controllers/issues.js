const Issue = require("../models/issue");

exports.createIssue = (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  const issue = new Issue({
    issueTitle: req.body.issueTitle,
    issueStatus: req.body.issueStatus,
    issueAssignedTo: req.body.issueAssignedTo,
    issueDescription: req.body.issueDescription,
    issueDate: req.body.issueDate,
    imagePath: url + "/images/" + req.file.filename,
    creator: req.userData.id,
    creatorName: req.userData.fullName
  });
  console.log(issue);

  issue
    .save()
    .then(createdIssue => {
      console.log(createdIssue);
      /*   myEventEmitter.on('event', function() {
            console.log(' issue has been posted a new issue');
        });
        myEventEmitter.emit('event');  */
      res.status(201).json({
        message: "A new issue created by " + req.userData.fullName,
        issue: {
          ...createdIssue,
          id: createdIssue._id,
          creator: createdIssue.creator
        }
      });
    })
    .catch(err => {
      res.status(500).json({
        message: "creating an issue failed!!"
      });
    });
};

exports.getIssues = (req, res, next) => {
  Issue.find()
    .then(documents => {
      // console.log(documents);
      res.json({
        messages: "issues retrieved successfully",
        issues: documents
      });
    })
    .catch(err => {
      res.status(500).json({
        message: `couldn't retrieved the issues`
      });
    });
};

exports.updateIssues = (req, res, next) => {
  let imagePath = req.body.imagePath;
  if (req.file) {
    const url = req.protocol + "://" + req.get("host");
    imagePath = url + "/images/" + req.file.filename;
  }

  const editedIssue = new Issue({
    _id: req.body.id,
    issueTitle: req.body.issueTitle,
    issueStatus: req.body.issueStatus,
    issueAssignedTo: req.body.issueAssignedTo,
    issueDescription: req.body.issueDescription,
    issueDate: req.body.issueDate,
    imagePath: imagePath,
    creator: req.userData.id
  });
  Issue.updateOne({ _id: req.params.id }, editedIssue)
    .then(result => {
      console.log(result);
      res.status(200).json({
        message: "issue updated by " + req.userData.fullName,
        userId: req.userData.id
      });
    })
    .catch(err => {
      res.status(500).json({
        message: `couldn't update the issue`
      });
    });
};

exports.getSingleIssue = (req, res, next) => {
  Issue.findById(req.params.id)
    .then(singleIssue => {
      res.status(200).json(singleIssue);
    })
    .catch(err => {
      res.status(404).json({
        message: `couldn't retrieved the issue`,
        error: err
      });
    });
};

exports.deleteIssue = (req, res, next) => {
  Issue.deleteOne({ _id: req.params.id, creator: req.userData.id })
    .then(result => {
      if (result.n > 0) {
        res
          .status(200)
          .json({
            message: "issue deleted by " + req.userData.fullName,
            userId: req.userData.id
          });
      } else {
        res.status(401).json({ message: "not authorized to delete" });
      }
    })
    .catch(err => {
      res.send(500).json({
        message: `couldn't delete the post`
      });
    });
};
