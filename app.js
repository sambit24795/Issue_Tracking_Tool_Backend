const path = require("path");
const express = require("express");
const cors = require("./middleware/cors");

const app = express();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

const issueRoutes = require("./routes/issues");
const userRoutes = require("./routes/user");

const watcherRoute = require("./routes/watcher");
const notificationRoute = require("./routes/notification");

mongoose
  .connect("mongodb+srv://sambit:" + process.env.MOPNGO_ATLAS_PW + "@issuetracking-dfrtt.mongodb.net/test?retryWrites=true")
  .then(() => {
    console.log("connected to database!!!");
  })
  .catch(() => {
    console.log("some error occured!!");
  });

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join(__dirname, "images")));

app.use(cors.cors);

app.use("/api/issues", issueRoutes);
app.use("/api/user", userRoutes);
app.use("/api/watcher", watcherRoute);
app.use("/api/notification", notificationRoute);

module.exports = app;
/* QNQZtJOwjrq7jv1x */