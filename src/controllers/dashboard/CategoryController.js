import { StaffModel } from "../../models/StaffModel.js";

export const createCateory = async(req, res) => {
 try {
     const {  } = req.body;
     await StaffModel.create({
        Staff_ID: Staff_ID,
        Username: Username,
        Password: Password,
        Staff_name: Staff_name,
        Email_ID: Email_ID,


     });

     return res.status(200).json({
        success: true,
        message: 'Created Successfully!',
     });
 } catch (error){
    return res.status(200).json({
        success: true,
        message: 'Created Successfully!',
    });
 }
};