import { Router } from "express";
import {getAllClients} from "../controllers/client.controller";
import db from "../config/db";
import {getAllUsers} from "../controllers/user.controller";

const router = Router();

const initDB = async() => {
  try {
    await db.authenticate();
  } catch (e) {
    console.error(e);
  }
}

initDB();

router.get("/clients/get-all", getAllClients);
router.get("/users/get-all", getAllUsers);

export default router;