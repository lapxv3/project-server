import mongoose from 'mongoose';

const ConnectMongoDB = async () => {
	try {
		await mongoose.connect('mongodb+srv://canteen_user:canteen_pass@canteen.fbv1z.mongodb.net/?retryWrites=true&w=majority&appName=canteen');
	} catch (err) {
		console.log(err);
	}
};

mongoose.connection.on('disconnected', () => {
	console.log('MongoDB disconnected!');
});

mongoose.connection.on('connected', () => {
	console.log('MongoDB connected!');
});

export default ConnectMongoDB;