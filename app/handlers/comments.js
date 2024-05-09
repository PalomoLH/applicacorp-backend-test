const getComments = async (id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch comments: ${response.status} ${response.statusText}`
      );
    }

    const comments = await response.json();

    if (!comments) {
      return { comments: [], error: null };
    }

    return { comments, error: null };
  } catch (error) {
    return { comments: null, error: error.message };
  }
};

module.exports = getComments;
