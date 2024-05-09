const getUsers = require("./users");
const getComments = require("./comments");

const getPosts = async (page, size, res) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch posts: ${response.status} ${response.statusText}`
      );
    }

    const posts = await response.json();

    if (!posts || posts.length === 0) {
      throw new Error("No posts found");
    }

    const userQueryMap = new Map();

    const filteredPosts = posts.reduce(
      (acc, post, index) => {
        acc.posts = acc.posts || [];

        if (index < page * size && index >= page * size - size) {
          acc.posts.push(post);

          if (!userQueryMap.has(post.userId)) {
            userQueryMap.set(post.userId, `id=${post.userId}`);
          }
        }

        return acc;
      },
      { posts: [] }
    ).posts;

    const userQueries = Array.from(userQueryMap.values()).join("&");

    const { users, error } = await getUsers(userQueries);

    if (error) {
      throw new Error(error);
    }

    const postPromises = filteredPosts.map((post) => {
      return new Promise(async (resolve, reject) => {
        try {
          const { comments, error } = await getComments(post.id);

          if (error) {
            reject(new Error(error));
            return;
          }

          post.comments = comments;

          post.user = users.find((user) => user.id === post.userId);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    });

    await Promise.all(postPromises);

    if (!filteredPosts || filteredPosts.length === 0) {
      throw new Error("No posts found");
    }

    res.send(filteredPosts);
  } catch (error) {
    if (error.message === "No posts found") {
      res.status(404).send({ error: error.message });
    } else {
      res.status(500).send({ error: error.message });
    }
  }
};

module.exports = getPosts;
