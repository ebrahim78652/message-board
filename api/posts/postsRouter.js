const { next } = require("cli");
const express = require("express");
const postsRouter = express.Router();
const {
  getAllPosts,
  addAPost,
  updateAPost,
  deleteAPost,
} = require("./postsController");

postsRouter.route("/").get(getAllPosts).post(addAPost);

postsRouter.all("/:_id", (req, res, next) => {
  console.log("all method called");
  next();
});
postsRouter.route("/:_id").put(updateAPost).delete(deleteAPost);

module.exports = postsRouter;
