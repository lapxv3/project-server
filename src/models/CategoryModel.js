import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
	{
		category_id : {
			type: String,
			required: true,
		},

	    categoryname : {
			type: String,
			required: false,
		},


	},
	{ timestamps: true },
);

export const CategoryModel = mongoose.model('categories', categorySchema);