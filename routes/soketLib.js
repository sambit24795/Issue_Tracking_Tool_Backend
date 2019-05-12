const socketio = require("socket.io");

const Comment = require("../models/comment");

let setServer = server => {
  let io = socketio.listen(server);

  let myIo = io.of("/");

  myIo.on("connection", socket => {
    console.log("on connection--emitting verify user");
    console.log("s0cket connected");

    socket.on("message", function(data) {
      const commentData = new Comment({
        email: data.email,
        comment: data.comment,
        issueId: data.issueId
      });

      commentData.save().then(result => {
        Comment.find({ issueId: result.issueId })
          .sort("-updated_at")
          .limit(1)
          .then(result => {
            io.emit("comment", result);
          });
      });
    });
    socket.on("getData", function(data) {
      const dataComment = {
        email: data.email,
        issueId: data.issueId
      };
    
      Comment.find({ issueId: data.issueId })
        .sort("-updated_at")
        .limit(100)
        .then(result => {
        
          io.emit("display", result);
        });
    });

    socket.on('getNotification', function(data) {
      console.log('notification data', data)
      io.emit('showToall', data)
    })

  });
};
 
module.exports = {
  setServer: setServer
};
