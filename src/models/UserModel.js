import { email } from 'envalid';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
	{
		usre_id : {
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

		user_name : {
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

export const UserModel = mongoose.model('users', userSchema);