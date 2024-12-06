

export const createCategory = async(req, res) => {
 try {
     const { staff_id, username, password, staff_name, email_id  } = req.body;
     await CategoryModel.create({
        category_id: staff_id,
        categoryname: username,
       


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
      const { name, description } = req.body;

      const dataToUpdate = await CategoryModel.findById(category_id);

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
       const staff_id = req.params.id;

       const staff = await CategoryModel.findById(category_id);

       return req.status(200).json({
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

export const getAllStaff = async (req, res) => {
   try {
       const category = await CategoryModel.find();

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
