import { Request, Response } from "express";
import ClientModel from "../models/client";
import * as dotenv from "dotenv";

dotenv.config();

export async function getAllClients(req: Request, res: Response) {
  ClientModel.findAll({
    // attributes: ["id", "name"]
  })
    .then((result: any) => {
      return res.json(result);
    })
    .catch((error: Error) => {
      console.log(error);
      return res.json({
        message: "Unable to retrieve clients."
      })
    });
}