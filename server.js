const express = require("express");
const routes = require("./app/routes");

const app = express();

routes(app);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
