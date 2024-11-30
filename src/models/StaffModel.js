import { email } from 'envalid';
import mongoose from 'mongoose';

const staffSchema = new mongoose.Schema(
	{
		staff_id : {
			type: String,
			required: true,
		},

	    username : {
			type: String,
			required: false,
		},

		password : {
			type: Number,
			required: false,
		},

		staff_name : {
			type: String,
			required: false,
		},

		email_id : {
			type: String,
			required: false,
		},

		

	},
	{ timestamps: true },
);

export const StaffModel = mongoose.model('staffs', staffSchema);