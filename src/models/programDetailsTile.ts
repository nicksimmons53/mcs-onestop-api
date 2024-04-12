import sequelize from "../config/db";
import {DataTypes} from "sequelize";
import {DateTime} from "luxon";

const ProgramDetails_Tile = sequelize.define(
  "tile_program_details",
  {
    clientId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    version: {
      type: DataTypes.INTEGER
    },
    substitutionsAllowed: {
      type: DataTypes.INTEGER
    },
    floorSettingMaterial: {
      type: DataTypes.STRING
    },
    customFloorSettingMaterial: {
      type: DataTypes.STRING
    },
    wallSettingMaterial: {
      type: DataTypes.STRING
    },
    customWallSettingMaterial: {
      type: DataTypes.STRING
    },
    allottedFloat: {
      type: DataTypes.STRING
    },
    chargeForExtraFloat: {
      type: DataTypes.STRING
    },
    waterproofMethod: {
      type: DataTypes.STRING
    },
    waterproofMethodShowerFloor: {
      type: DataTypes.STRING
    },
    waterproofMethodShowerWalls: {
      type: DataTypes.STRING
    },
    waterproofMethodTubWall: {
      type: DataTypes.STRING
    },
    fiberglassResponsibility: {
      type: DataTypes.STRING
    },
    backerboardInstallResponsibility: {
      type: DataTypes.INTEGER
    },
    punchOutMaterial: {
      type: DataTypes.STRING
    },
    showerNicheConstruction: {
      type: DataTypes.STRING
    },
    showerNicheFraming: {
      type: DataTypes.STRING
    },
    showerNicheBrand: {
      type: DataTypes.STRING
    },
    cornerSoapDishesStandard: {
      type: DataTypes.STRING
    },
    cornerSoapDishMaterial: {
      type: DataTypes.STRING
    },
    showerSeatConstruction: {
      type: DataTypes.STRING
    },
    metalEdgeOptions: {
      type: DataTypes.STRING
    },
    groutJointSizing: {
      type: DataTypes.STRING
    },
    groutJointNotes: {
      type: DataTypes.STRING
    },
    preferredGroutBrand: {
      type: DataTypes.STRING
    },
    upgradedGrout: {
      type: DataTypes.STRING
    },
    groutProduct: {
      type: DataTypes.STRING
    },
    subfloorStandardPractice: {
      type: DataTypes.STRING
    },
    subfloorProducts: {
      type: DataTypes.STRING
    },
    standardWallTileHeight: {
      type: DataTypes.STRING
    },
    takeoffResponsibility: {
      type: DataTypes.STRING
    },
    wasteFactor: {
      type: DataTypes.STRING
    },
    wasteFactorWalls: {
      type: DataTypes.STRING
    },
    wasteFactorFloors: {
      type: DataTypes.STRING
    },
    wasteFactorMosaics: {
      type: DataTypes.STRING
    },
    notes: {
      type: DataTypes.STRING
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DateTime.now().toFormat("YYYY-MM-DD HH:mm:ss")
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DateTime.now().toFormat("YYYY-MM-DD HH:mm:ss")
    },
  }, {
    indexes: [{ unique: true, fields: ["id"] }]
  }
)

export default ProgramDetails_Tile;