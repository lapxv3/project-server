import { UserModel } from "../../models/UserModel.js";


export const createUser = async(req, res) => {
 try {
     const { user_id, username, password, user_name, email_id  } = req.body;
     await UserModel.create({
        user_id: staff_id,
        username: username,
        password: password,
        user_name: staff_name,
        email_id: email_id,


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

export const updateUser = async (req, res) => {
   try {
      const staff_id = req.params.id;
      const { name, description } = req.body;

      const dataToUpdate = await UserModel.findById(user_id);

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


export const deleteStaff = async (req, res) => {
   try {
      const user_id = req.params.id;
      


       await UserModel.findByIdAndDelete(user_id);


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

export const viewUser = async (req, res) => {
   try {
       const user_id = req.params.id;

       const user = await UserModel.findById(user_id);

       return req.status(200).json({
           success: true,
           message: 'Fetched',
           data: { user: user},
       });
   }   catch (error) {
       return res.status(500).json({
           success: false,
           message: 'server error',
       });
   }
};

export const getAllUser = async (req, res) => {
   try {
       const user = await UserModel.find();

       return res.status(200).json({
           success: true,
           message: 'All Data Fetched',
           data: { user: user},
       });
   } catch (error) {
       return res.status(500).json({
           success: false,
           message: 'server error',
       });
   }
};
