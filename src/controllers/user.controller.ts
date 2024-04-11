import { Request, Response } from "express";
import UserModel from "../models/user";
import * as dotenv from "dotenv";
import Client from "../models/client";

dotenv.config();

export async function getAllUsers(req: Request, res: Response) {
  UserModel.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"]},
    include: []
  })
    .then((result: any) => {
      return res.json(result);
    })
    .catch((error: Error) => {
      console.log(error);
      return res.json({
        message: "Unable to retrieve users."
      })
    });
}