const express = require("express");

const app = express();

app.use(express.static("."));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/Index.html");
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
