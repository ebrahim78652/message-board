const express = require("express");

const app = express();

//add global middleware
app.use(express.json());

module.exports = app;
