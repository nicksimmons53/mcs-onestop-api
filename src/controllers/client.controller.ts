import { Request, Response } from "express";
import ClientModel from "../models/client";
import * as dotenv from "dotenv";
import User from "../models/user";
import Status from "../models/status";
import {Op} from "sequelize";
import Address from "../models/address";
import Contact from "../models/contact";
import Approval from "../models/approval";
import AccountingInfoModel from "../models/accountingInfo";
import ExpeditingInfoModel from "../models/expeditingInfo";
import ProgramDetails_WoodVinyl from "../models/programDetailsWoodVinyl";
import ProgramDetails_Cabinet from "../models/programDetailsCabinet";
import ProgramDetails_Carpet from "../models/programDetailsCarpet";
import ProgramsModel from "../models/programs";
import ProgramDetailsCarpet from "../models/programDetailsCarpet";
import ProgramDetailsCountertops from "../models/programDetailsCountertops";
import ProgramDetailsTile from "../models/programDetailsTile";
import BillingParts from "../models/billingParts";

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
    });
}

export async function getClientPrograms(req: Request, res: Response) {
  ProgramsModel.findAll({
    where: {
      clientId: {
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
        message: "Unable to retrieve client programs."
      })
    });
}

export async function getClientAccountingInfo(req: Request, res: Response) {
  AccountingInfoModel.findAll({
    where: {
      clientId: {
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
        message: "Unable to retrieve client accounting info."
      })
    });
}

export async function getClientExpeditingInfo(req: Request, res: Response) {
  ExpeditingInfoModel.findAll({
    where: {
      clientId: {
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
        message: "Unable to retrieve client expediting info."
      })
    });
}

export async function getProgramDetailsCabinets(req: Request, res: Response) {
  ProgramDetails_Cabinet.findAll({
    where: {
      clientId: {
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
        message: "Unable to retrieve client cabinet info."
      })
    });
}

export async function getProgramDetailsCarpet(req: Request, res: Response) {
  ProgramDetailsCarpet.findAll({
    where: {
      clientId: {
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
        message: "Unable to retrieve client carpet info."
      })
    });
}

export async function getProgramDetailsCountertops(req: Request, res: Response) {
  ProgramDetailsCountertops.findAll({
    where: {
      clientId: {
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
        message: "Unable to retrieve client countertops info."
      })
    });
}

export async function getProgramDetailsTile(req: Request, res: Response) {
  ProgramDetailsTile.findAll({
    where: {
      clientId: {
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
        message: "Unable to retrieve client tile info."
      })
    });
}

export async function getProgramDetailsWoodVinyl(req: Request, res: Response) {
  ProgramDetails_WoodVinyl.findAll({
    where: {
      clientId: {
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
        message: "Unable to retrieve client wood and vinyl info."
      })
    });
}

export async function getBillingParts(req: Request, res: Response) {
  BillingParts.findAll({
    where: {
      clientId: {
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
        message: "Unable to retrieve client wood and vinyl info."
      })
    });
}
