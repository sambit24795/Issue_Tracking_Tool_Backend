const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const shortid = require("shortid");
const User = require("../models/user");

exports.createUser = (req, res, next) => {
  userShortId = shortid.generate();
  bcrypt.hash(req.body.password, 10).then(hash => {
    const user = new User({
      email: req.body.email,
      password: hash,
      shortUserId: userShortId,
      fullName: req.body.fullName
    });
    user
      .save()
      .then(result => {
        res.status(201).json({
          message: "user created successfully!! by " + result.email,
          result: result
        });
      })
      .catch(err => {
        res.status(500).json({
          message: "email alreay exists!!"
        });
      });
  });
};

exports.userLogin = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      console.log(user);
      if (!user) {
        res.status(401).json({
          message: "Email not found"
        });
      }
      return bcrypt
        .compare(req.body.password, user.password)
        .then(result => {
          if (!result) {
            res.status(401).json({
              message: "unknown credentials"
            });
          }
          const token = jwt.sign(
            {
              email: user.email,
              fullName: user.fullName,
              id: user._id,
              shortid: user.userShortId
            },
            process.env.JWT_KEY,
            { expiresIn: "1h" }
          );
          res.status(200).json({
            token: token,
            expiresIn: 3600,
            userId: user._id,
            email: user.email,
            fullName: user.fullName,
            message: "this is Auth Token"
          });
        })
        .catch(err => {
          res.status(401).json({
            message: "Auth Failed- Password Wrong"
          });
        });
    })
    .catch(err => {
      res.status(401).json({
        err: err,
        message: "Auth Failed"
      });
    });
};

exports.getUsers = (req, res, next) => {
  User.find().then(users => {
    // console.log(users);
    res.json({
      message: "users retrieved successfully",
      user: users
    });
  });
};

exports.getUserbyMail = (req, res, next) => {
  User.findOne({ email: req.params.email })
    .then(userData => {
      res.status(200).json({
        message: "user retrieved successfully!!",
        userData: userData
      });
    })
    .catch(err => {
      res.status(500).json({
        message: "error in retrieveing user email details"
      });
    });
};
