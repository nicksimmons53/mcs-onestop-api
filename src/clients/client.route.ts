import { Router } from "express";
import {getAllClients} from "../controllers/client.controller";
import db from "../config/db";

const clientRouter = Router();

const initDB = async() => {
  try {
    await db.authenticate();
  } catch (e) {
    console.error(e);
  }
}

initDB();

clientRouter.get("/get-all", getAllClients);

export default clientRouter;