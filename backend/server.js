import express from "express";
import cors from "cors";
import dbconnect from "./models/dbconnect.js";
import { createUser } from "./controllers/userControllers.js";
import { signIn } from "./controllers/signInControllers.js";

const app = express();
dbconnect();

// middleware
app.use(express.json());
app.use(cors());

// apis ==================================================================>
// CREATE USER
app.post("/api/v1/signup", createUser);
app.post("/api/v1/signin", signIn);
app.get("/", (req, res) => {
  res.send("nice");
});
app.listen(3000, () => console.log("Server running at 3000"));