const express = require("express");
const app = express();
require("dotenv").config();
const page = require("./routs/page");

const connectDB = require("./db/connect");
const port = process.env.PORT || 4500;
//app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/v1", page);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is listening on port ${port}.....`);
    });
    //crear();
  } catch (error) {
    console.log(error);
  }
};

start();
