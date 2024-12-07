import express from "express";
import { createFood, deleteFood, getAllFood, updateFood, viewFood } from "../../../controllers/dashboard/FoodController.js";

export const FoodRouter = express.Router();

FoodRouter.post('/', createFood);
FoodRouter.put('/update/:id', updateFood);
FoodRouter.delete('/delete/:id', deleteFood);
FoodRouter.get('/view/:id', viewFood);
FoodRouter.get('/all', getAllFood);