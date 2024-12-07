import express from "express";
import { createCategory, deleteCategory, getAllCategory, updateCategory, viewCategory } from "../../../controllers/dashboard/CategoryController.js";

export const CategoryRouter = express.Router();

CategoryRouter.post('/', createCategory);
CategoryRouter.put('/update/:id', updateCategory);
CategoryRouter.delete('/delete/:id', deleteCategory);
CategoryRouter.get('/view/:id', viewCategory);
CategoryRouter.get('/all', getAllCategory);