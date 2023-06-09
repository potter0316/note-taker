const express = require("express");
const fs = require("fs");
const path = require("path");
const db = require("./db/db.json");

const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, function () {
  console.log(`Express server listening on port: ${PORT}`);
});
