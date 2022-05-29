const { command } = require("cli");
const mongoose = require("mongoose");
const messageModel = require("./postsModel");

const getAllPosts = async (req, res, next) => {
  console.log("GET of posts called");
  const messages = await messageModel.find({}).exec();
  console.log(messages);
  res.status(200).json(messages);
};

const addAPost = async (req, res, next) => {
  console.log("POST of the posts called");
  console.log("adding a new post");
  const messageToBeAdded = req.body;
  const message = await messageModel.create([messageToBeAdded]);
  res.status(200).json(messageToBeAdded);
};

//sending the id as a parameter and in the body of the request

const updateAPost = async (req, res, next) => {
  console.log("PUT called");
  console.log(req.params);
  console.log(req.body.updated);

  try {
    const message = await messageModel
      .updateOne(req.params, req.body.updated)
      .exec();

    console.log(message);
    const messageUpdated = await messageModel.find(req.params).exec();

    console.log(messageUpdated);
    res.status(201).send(messageUpdated);
  } catch (err) {
    console.log("error handler 1 in PUT called");
    next(err);
  }
};

const deleteAPost = async (req, res, next) => {
  const messageToBeDeleted = await messageModel
    .find(req.params)
    .exec()
    .catch((err) => {
      next(err);
    });
  console.log(messageToBeDeleted);

  const responseFromDb = await messageModel.deleteOne(req.params).exec();
  console.log(responseFromDb);

  res.status(201).send(messageToBeDeleted);
};

module.exports = {
  getAllPosts,
  addAPost,
  updateAPost,
  deleteAPost,
};
