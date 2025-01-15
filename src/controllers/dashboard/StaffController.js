import dayjs from "dayjs";
import { StaffModel } from "../../models/StaffModel.js";
import bcrypt from 'bcrypt';

export const createStaff = async (req, res) => {
   try {
      // staff_id, 
      const { email_id, contactNumber, password, userName, } = req.body;
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      await StaffModel.create({
         //   staff_id: staff_id,
         userName: userName,
         password: hash,
         email_id: email_id,
         contactNumber: contactNumber,

      });

      return res.status(200).json({
         success: true,
         message: 'Created Successfully!',
      });
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: error.message,
      });
   }
};

export const updateStaff = async (req, res) => {
   try {
      const staff_id = req.params.id;
      const { email_id, userName, contactNumber } = req.body;
      console.log(req.body);
      const dataToUpdate = await StaffModel.findById(staff_id);
      console.log('data', dataToUpdate)
      dataToUpdate.userName = userName;
      dataToUpdate.contactNumber = contactNumber;
      dataToUpdate.email_id = email_id;

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


export const deleteStaff = async (req, res) => {
   try {
      const staff_id = req.params.id;



      const staff = await StaffModel.findById(staff_id);

      staff.deletedAt = new dayjs()
      staff.save()
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

export const viewStaff = async (req, res) => {
   try {
      const staff_id = req.params.id;
      const staff = await StaffModel.findById(staff_id);


      return res.status(200).json({
         success: true,
         message: 'Fetched',
         data: { staff: staff },
      });
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: 'server error',
      });
   }
};

export const getAllStaff = async (req, res) => {
   try {
      const staff = await StaffModel.find({deletedAt:null});
      console.log(staff)
      return res.status(200).json({
         success: true,
         message: 'All Data Fetched',
         data: { staff: staff },
      });
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: 'server error',
      });
   }
};
