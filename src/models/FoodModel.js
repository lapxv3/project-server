import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema(
	{
		
	    foodName : {
			type: String,
			required: false,
		},
	    category : {
			type: mongoose.Types.ObjectId,
			required: false,
		},
		price : {
			type: String,
			required: false,
		},
		
		image : {
			type: String,
			required: false,
		},

		

	},
	{ timestamps: true },
);

export const FoodModel = mongoose.model('foods', foodSchema);