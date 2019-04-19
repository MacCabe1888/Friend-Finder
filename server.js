const express = require("express");

const PORT = process.env.PORT || 3407;

const app = express();

app.use(express.static("app/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const htmlRoutes = require("./app/routing/htmlRoutes");
app.use(htmlRoutes);

const apiRoutes = require("./app/routing/apiRoutes");
app.use(apiRoutes);

app.listen(PORT, () => {
  console.log("Server started on PORT", PORT);
});
