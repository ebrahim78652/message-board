const app = require("./middleware/appMiddleware");
const mongoose = require("mongoose");
const postsRouter = require("./api/posts/postsRouter");

//make the connection to the databse:
//this will not run each and everytime there is a request.
mongoose.connect("mongodb://localhost:27017/message-board");

//now set up the router.
app.use("/posts", postsRouter);

//set up global error handling
app.use((error, req, res, next) => {
  console.log("global error handler called!");
  res.status(500).json({ error: "an error happened" });
});

app.listen(3001, () => {
  console.log("listening on port 3001");
});
