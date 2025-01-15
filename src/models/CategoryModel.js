import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
	{
		

	    categoryname : {
			type: String,
			required: false,
		},


	},
	{ timestamps: true },
);

export const CategoryModel = mongoose.model('categories', categorySchema);