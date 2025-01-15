import { CategoryModel } from "../../models/CategoryModel.js";
import { FoodModel } from "../../models/FoodModel.js";
import path from 'path';


export const createFood = async (req, res) => {
   try {


      const { foodName, price, category } = req.body;
      let image = 'uploads' + req.file?.path.split(path.sep + 'uploads').at(1);

      console.log(req.file)

      await FoodModel.create({
         image: image,
         foodName: foodName,
         price: price,
         category: category,

      });

      return res.status(200).json({
         success: true,
         message: 'Created Successfully!',
      });
   } catch (error) {
      console.log(error)
      return res.status(500).json({
         success: false,
         message: error.message,
      });
   }
};

export const updateFood = async (req, res) => {
   try {
      const food_id = req.params.id;
      const { foodName, price, category } = req.body;
      console.log(req.body)
      let imageFile
      console.log(req.file);

      const dataToUpdate = await FoodModel.findById(food_id);

      if (req.file) {
         imageFile = 'uploads' + req.file?.path.split(path.sep + 'uploads').at(1);
         dataToUpdate.image = imageFile;

      }
      dataToUpdate.foodName = foodName;
      dataToUpdate.price = price;
      dataToUpdate.category = category;


      await dataToUpdate.save();

      return res.status(200).json({
         success: true,
         message: 'Updated'
      });


   } catch (error) {
      return res.status(500).json({
         success: false,
         message: 'Server error'
      });
   }

};


export const deleteFood = async (req, res) => {
   try {
      const food_id = req.params.id;



      await FoodModel.findByIdAndDelete(food_id);


      return res.status(200).json({
         success: false,
         message: 'Deleted'
      });


   } catch (error) {
      return res.status(500).json({
         success: false,
         message: 'Server error'
      });
   }

};

export const viewFood = async (req, res, next) => {
   try {
      const food_id = req.params.id;
      const food = await FoodModel.findById(food_id);


      return res.status(200).json({
         success: true,
         message: 'Fetched',
         data: { food: food },
      });
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: 'server error',
      });
   }
};

export const getAllFood = async (req, res) => {
   try {
      const food = await FoodModel.aggregate([
         {
            $lookup: {
               from: CategoryModel.modelName,
               localField: 'category',
               foreignField: '_id',
               as: 'category'
            }
         },
         {
            $unwind: '$category'
         },
         {
            $project: {
               foodName: 1,
               price: 1,
               category: '$category.categoryname'
            }
         }
      ]);

      return res.status(200).json({
         success: true,
         message: 'All Data Fetched',
         data: { food: food },
      });
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: 'server error',
      });
   }
};
