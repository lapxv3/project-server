import { email } from 'envalid';
import mongoose from 'mongoose';

const staffSchema = new mongoose.Schema(
	{

		userName: {
			type: String,
			required: true,
		},

		password: {
			type: String,
			required: true,
		},


		email_id: {
			type: String,
			required: true,
		},


		contactNumber: {
			type: String,
			required: true,
		},

		deletedAt: {
			type: Date,
			required:false,
			default:null
		}

	},
	{ timestamps: true },
);

export const StaffModel = mongoose.model('staffs', staffSchema);