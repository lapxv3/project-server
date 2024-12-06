import { StaffModel } from "../../models/StaffModel.js";

export const createStaff = async(req, res) => {
 try {
     const { staff_id, username, password, staff_name, email_id  } = req.body;
     await StaffModel.create({
        staff_id: staff_id,
        username: username,
        password: password,
        staff_name: staff_name,
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

export const updateStaff = async (req, res) => {
   try {
      const staff_id = req.params.id;
      const { name, description } = req.body;

      const dataToUpdate = await StaffModel.findById(staff_id);

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
      const staff_id = req.params.id;
      


       await StaffModel.findByIdAndDelete(staff_id);


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

export const viewStaff = async (req, res) => {
   try {
       const staff_id = req.params.id;

       const staff = await StaffModel.findById(staff_id);

       return req.status(200).json({
           success: true,
           message: 'Fetched',
           data: { staff: staff},
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
       const staff = await StaffModel.find();

       return res.status(200).json({
           success: true,
           message: 'All Data Fetched',
           data: { staff: staff},
       });
   } catch (error) {
       return res.status(500).json({
           success: false,
           message: 'server error',
       });
   }
};
