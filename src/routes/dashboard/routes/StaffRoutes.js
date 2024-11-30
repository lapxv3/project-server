import express from "express";
import { createStaff } from "../../../controllers/dashboard/StaffController.js";
export const StaffRouter = express.Router();

StaffRouter.post('/', createStaff);