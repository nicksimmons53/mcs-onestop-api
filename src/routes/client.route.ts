import { Router } from "express";
import {
  getAllClients,
  getBillingParts,
  getClientAccountingInfo,
  getClientById,
  getClientExpeditingInfo,
  getClientPrograms,
  getProgramDetailsCabinets,
  getProgramDetailsCarpet,
  getProgramDetailsCountertops,
  getProgramDetailsTile,
  getProgramDetailsWoodVinyl
} from "../controllers/client.controller";
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
router.get("/clients", getClientById);
router.get("/clients/accounting-info", getClientAccountingInfo);
router.get("/clients/expediting-info", getClientExpeditingInfo);
router.get("/clients/programs", getClientPrograms);
router.get("/clients/program-details-cabinets", getProgramDetailsCabinets);
router.get("/clients/program-details-carpet", getProgramDetailsCarpet);
router.get("/clients/program-details-countertops", getProgramDetailsCountertops);
router.get("/clients/program-details-tile", getProgramDetailsTile);
router.get("/clients/program-details-wood-vinyl", getProgramDetailsWoodVinyl);
router.get("/clients/billing-parts", getBillingParts);
router.get("/users/get-all", getAllUsers);

export default router;