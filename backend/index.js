const express = require("express");

require("dotenv").config();

const db = require("./connection/connection");

const app = express();
const morgan = require("morgan")
const port = process.env.PORT;
const bodyParser = require("body-parser");

const UserRoute = require("./Route/userRoute");
const CategoryRoute = require('./Route/categoryRoute');
const ProductRoute = require("./Route/productRoute");

// const{jwtMiddleware}=require('./middleware/middleware');

app.use(bodyParser.json());
app.use(morgan('dev'))

app.use(express.static(__dirname+ '/public/uploads'))

app.use("/api", UserRoute);
app.use('/api',CategoryRoute);
app.use('/api',ProductRoute);

app.get("/", (req, res) => {
  res.send("This is an ecommerce server");
});

app.listen(port, () => {
  console.log(`server get started at ${port}`);
});
