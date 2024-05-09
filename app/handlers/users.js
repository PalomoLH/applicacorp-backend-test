const getUsers = async (query) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users${query ? `?${query}` : ""}`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch users: ${response.status} ${response.statusText}`
      );
    }

    const users = await response.json();

    if (!users) {
      throw new Error("No users found");
    }

    return { users, error: null };
  } catch (error) {
    return { users: null, error: error.message };
  }
};

module.exports = getUsers;
