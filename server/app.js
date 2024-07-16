import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./database/connectDB.js";
import router from "./routes/routes.js";
dotenv.config();
const app = express();
const uri = process.env.URL;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/", router);
const port = process.env.PORT;
connectDB(uri);
app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
