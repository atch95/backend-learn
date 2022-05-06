import mongoose from "mongoose";
import { ControllerCreateUser } from "./controllers/create-user/Controller";
import { ControllerGetAllUser } from "./controllers/get-all-user/Controller";
import { ControllerDeleteUser } from "./controllers/delete-user/Controller";
import { ControllerUpdateUser } from "./controllers/update-user/Controller";
import { ControllerGetByIdUser } from "./controllers/get-user-by-id/Controller";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

//===================================================================
//                          DEFAULT SETTINGS
//===================================================================
const app = express();
const port = 4000;
const jsonParser = bodyParser.json({
  limit: "5000mb",
  extended: true,
  parameterLimit: 5000,
});

app.use(cors());
app.use(jsonParser);

//===================================================================
//                          CONNECTION
//===================================================================

app.listen(port, () => {
  mongoose.connect("mongodb://localhost:27017/myProject");
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error"));
  console.log(`Example app listening on port ${port}`);
});

//===================================================================
//                          ENDPOINTS
//===================================================================

app.post("/create-user", ControllerCreateUser);
app.get("/get-all-users", ControllerGetAllUser);
app.delete("/delete-user", ControllerDeleteUser);
app.post("/update-user", ControllerUpdateUser);
app.get("/find-user", ControllerGetByIdUser);