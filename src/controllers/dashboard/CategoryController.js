import { CategoryModel } from "../../models/CategoryModel.js";


export const createCategory = async(req, res) => {
 try { 
    console.log(req.body)
     const { categoryName } = req.body;
     await CategoryModel.create({
        categoryname: categoryName,
       


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

export const updateCategory = async (req, res) => {
   try {

      const category_id = req.params.id;
      const { categoryId, categoryName } = req.body;
      
      const dataToUpdate = await CategoryModel.findById({_id:category_id});

      dataToUpdate.category_id = categoryId;
      dataToUpdate.categoryname = categoryName;

      await dataToUpdate.save();
      return res.status(200).json({
         success: true,
         message: 'Updated'
      });


   } catch (error){
      console.log(error)
      return res.status(500).json({
         success: false,
         message: 'Server error'
      });
   }

};


export const deleteCategory = async (req, res) => {
   try {
      const category_id = req.params.id;
      


       await CategoryModel.findByIdAndDelete(category_id);


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

export const viewCategory = async (req, res) => {
   try {
       const category_id = req.params.id;

       const category = await CategoryModel.findById({_id:category_id});

       return res.status(200).json({
           success: true,
           message: 'Fetched',
           data: { category: category},
       });
   }   catch (error) {
       return res.status(500).json({
           success: false,
           message: 'server error',
       });
   }
};

export const getAllCategory = async (req, res) => {
   try {
       const category = await CategoryModel.find();
console.log(category)
       return res.status(200).json({
           success: true,
           message: 'All Data Fetched',
           data: { category: category},
       });
   } catch (error) {
       return res.status(500).json({
           success: false,
           message: 'server error',
       });
   }
};
