const express = require("express");

const app = express();

const PORT = process.env.PORT || 3407;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const htmlRoutes = require("./app/routing/htmlRoutes");
app.use(htmlRoutes);

const apiRoutes = require("./app/routing/apiRoutes");
app.use(apiRoutes);

app.listen(PORT, () => {
  console.log("Server started on PORT", PORT);
});
