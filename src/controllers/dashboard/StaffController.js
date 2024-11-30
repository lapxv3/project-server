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