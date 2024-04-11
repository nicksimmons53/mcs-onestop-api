import { Request, Response } from "express";
import ClientModel from "../models/client";
import * as dotenv from "dotenv";
import User from "../models/user";
import Status from "../models/status";
import {Op} from "sequelize";
import Address from "../models/address";
import Contact from "../models/contact";
import Approval from "../models/approval";

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
        message: "Unable to retrieve clients."
      })
    });
}

export async function getClientById(req: Request, res: Response) {
  ClientModel.findAll({
    include: [{ model: User }, { model: Status }, { model: Address }, { model: Contact }, { model: Approval }],
    where: {
      id: {
        [Op.eq]: req.query.id
      }
    }
  })
    .then((result: any) => {
      return res.json(result);
    })
    .catch((error: Error) => {
      console.log(error);
      return res.json({
        message: "Unable to retrieve client."
      })
    })
}