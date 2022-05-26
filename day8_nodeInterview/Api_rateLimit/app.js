const express = require("express");
const app = express();

const posts = require("./posts");
const ratelimit = require("express-rate-limit");

const limiter = ratelimit({
  max: 5,
  macos: 1000,
});

app.get("/post", limiter, (req, res) => {
  res.send({
    status: "success",
    posts: posts,
  });
});
app.listen(5010, () => {
  console.log("listening 5010");
});
