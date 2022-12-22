const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

const index = require("./routes");

const port = process.env.PORT || 3001;

app.use(index);
app.listen(port, () => {
  console.log(`server running on ${port}`);
});
