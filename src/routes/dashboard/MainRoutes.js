import express from 'express';
import { StaffRouter } from './routes/StaffRoutes.js';

export const DashboardRouter = express.Router();

DashboardRouter.use('/staffs', StaffRouter);
