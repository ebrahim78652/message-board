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

postsRouter
  .route("/:_id", () => {
    console.log("middle ware that is run for the id!");
    next();
  })
  .put(updateAPost)
  .delete(deleteAPost);

module.exports = postsRouter;
