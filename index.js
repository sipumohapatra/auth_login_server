import express from "express";  
import cors from "cors"
const app = express();
import mongoose from "mongoose";   //connect between node and mongodb
import route from "./router/user-rauter.js"; 
import bodyParser from "body-parser";
const port = 5000;

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use("/", route);
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.status(200).send("hello world");
// });

// connect to mongodb
mongoose
  .connect(
    "mongodb+srv://sagarkumarmohapatra5:eK2Sau0XwYSeusoo@cluster0.bdbyspr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    
  )
  .then(() => {
    console.log("connected to mongodb");
  });

// listening the port
app.listen(port, () => console.log(`server running on port${port}`));
