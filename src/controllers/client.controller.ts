import { Request, Response } from "express";
import ClientModel from "../models/client";
import * as dotenv from "dotenv";
import User from "../models/user";
import Status from "../models/status";

dotenv.config();

export async function getAllClients(req: Request, res: Response) {
  ClientModel.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"]},
    include: [{ model: User }, { model: Status }]
  })
    .then((result: any) => {
      return res.json(result);
    })
    .catch((error: Error) => {
      console.log(error);
      return res.json({
        message: "Unable to retrieve routes."
      })
    });
}