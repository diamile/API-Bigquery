const express = require("express");

const app = express();

const index = require("./routes");

const port = process.env.PORT || 3000;

app.use(index);
app.listen(port, () => {
  console.log(`server running on ${port}`);
});
