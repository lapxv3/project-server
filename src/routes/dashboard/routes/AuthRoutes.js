import express from "express";
import { postAuthentication } from "../../../controllers/dashboard/AuthController.js";

export const AuthRouter = express.Router();

AuthRouter.post('/login', postAuthentication);
