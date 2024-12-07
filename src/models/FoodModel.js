import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema(
	{
		food_id : {
			type: String,
			required: true,
		},

	    foodFame : {
			type: String,
			required: false,
		},

		price : {
			type: Number,
			required: false,
		},

		

	},
	{ timestamps: true },
);

export const FoodModel = mongoose.model('foods', foodSchema);