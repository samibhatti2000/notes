const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const path = require("path");

const errorMiddleware = require("./middleware/error");

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}
app.use(cors());

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// Route Imports
const nftholder = require("./routes/nftHolderRoute");
const user = require("./routes/userRoute");

app.use("/api/v1", nftholder);
app.use("/api/v1", user);

app.use(express.static(path.join(__dirname, "./admindashboard/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./admindashboard/build/index.html"));
});

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
