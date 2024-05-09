const getPosts = require("../handlers/posts");

const posts = (req, res) => {
  const page = parseInt((req.query.page > 0 && req.query.page) || 1);
  const size = parseInt((req.query.size > 0 && req.query.size) || 10);

  getPosts(page, size, res);
};

module.exports = posts;
