import { FoodModel } from "../../models/FoodModel.js";


export const createFood = async(req, res) => {
 try {

     const { foodId , foodName , price } = req.body;
     await FoodModel.create({
        food_id: foodId,
        foodname: foodName,
        price: price,

     });

     return res.status(200).json({
        success: true,
        message: 'Created Successfully!',
     });
 } catch (error){
    return res.status(500).json({
        success: false,
        message: error.message,
    });
 }
};

export const updateFood = async (req, res) => {
   try {
      const food_id = req.params.id;
      const { name, description } = req.body;

      const dataToUpdate = await FoodModel.findById(food_id);

      dataToUpdate.name = name;
      dataToUpdate.description = description;

      await dataToUpdate.save();

      return res.status(200).json({
         success: true,
         message: 'Updated'
      });


   } catch (error){
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


   } catch (error){
      return res.status(500).json({
         success: false,
         message: 'Server error'
      });
   }

};

export const viewFood = async (req, res) => {
   try {
       const food_id = req.params.id;

       const food = await FoodModel.findById(food_id);

       return req.status(200).json({
           success: true,
           message: 'Fetched',
           data: { food: food},
       });
   }   catch (error) {
       return res.status(500).json({
           success: false,
           message: 'server error',
       });
   }
};

export const getAllFood = async (req, res) => {
   try {
       const food = await FoodModel.find();

       return res.status(200).json({
           success: true,
           message: 'All Data Fetched',
           data: { food: food},
       });
   } catch (error) {
       return res.status(500).json({
           success: false,
           message: 'server error',
       });
   }
};
