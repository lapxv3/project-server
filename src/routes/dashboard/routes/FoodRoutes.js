import express from "express";
import { createFood, deleteFood, getAllFood, updateFood, viewFood } from "../../../controllers/dashboard/FoodController.js";
import { uploadFile } from "../../../utils/fileUploader.js";

export const FoodRouter = express.Router();

FoodRouter.post('/',uploadFile("foods").single('image'), createFood);
FoodRouter.put('/update/:id',uploadFile("foods").single('image'), updateFood);
FoodRouter.delete('/delete/:id', deleteFood);
FoodRouter.get('/view/:id', viewFood);
FoodRouter.get('/all', getAllFood);