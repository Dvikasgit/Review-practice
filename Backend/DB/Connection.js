import mongoose from "mongoose";

const Url = "mongodb://localhost:27017";
mongoose.connect(Url);

console.log("DataBase Connected Successfully");