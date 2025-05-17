import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1/AdminPanelData");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connection successful to MongoDB");
});
