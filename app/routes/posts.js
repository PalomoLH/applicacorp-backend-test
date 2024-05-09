const getPosts = require("../handlers/posts");

const posts = (req, res) => {
  const config = {
    page: 1,
    size: 10,
    query: "",
  };

  res.json(getPosts(config.page, config.size, config.query));
};

module.exports = posts;
