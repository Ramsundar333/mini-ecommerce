const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const connectDatabase = require("./config/connectDatabase");

dotenv.config({ path: path.join(__dirname, "config", "config.env") });

const products = require("./routes/product");
const orders = require("./routes/order");

connectDatabase();
//MiddleWare for Json Data
app.use(express.json());
//MiddleWare for Cors - To Allow API
app.use(cors());

app.use("/api/v1/", products);
app.use("/api/v1/", orders);

app.listen(process.env.PORT, () => {
  console.log(
    `Server listing to Port ${process.env.PORT} in ${process.env.NODE_ENV}`
  );
});
