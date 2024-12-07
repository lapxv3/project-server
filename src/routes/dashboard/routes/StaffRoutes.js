import express from "express";
import { createStaff, deleteStaff, getAllStaff, updateStaff, viewStaff } from "../../../controllers/dashboard/StaffController.js";
export const StaffRouter = express.Router();

StaffRouter.post('/', createStaff);
StaffRouter.put('/update/:id', updateStaff);
StaffRouter.delete('/delete/:id', deleteStaff);
StaffRouter.get('/view/:id', viewStaff);
StaffRouter.get('/all', getAllStaff);