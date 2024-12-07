import express from "express";
import { createUser, deleteUser, getAllUser, updateUser, viewUser } from "../../../controllers/dashboard/UserController.js ";

export const UserRouter = express.Router();

UserRouter.post('/', createUser);
UserRouter.put('/update/:id', updateUser);
UserRouter.delete('/delete/:id', deleteUser);
UserRouter.get('/view/:id', viewUser);
UserRouter.get('/all', getAllUser);