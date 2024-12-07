import express from 'express';
import { StaffRouter } from './routes/StaffRoutes.js';
import { UserRouter } from './routes/UserRoutes.js';
import { FoodRouter } from './routes/FoodRoutes.js';
import { CategoryRouter } from './routes/CategoryRoutes.js';

export const DashboardRouter = express.Router();

DashboardRouter.use('/staffs', StaffRouter);
DashboardRouter.use('/users', UserRouter);
DashboardRouter.use('/foods', FoodRouter);
DashboardRouter.use('/categories', CategoryRouter);

