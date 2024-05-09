const getPosts = (page, size, query) => {
  return {
    page: page,
    size: size,
    query: query,
  };
};

module.exports = getPosts;
