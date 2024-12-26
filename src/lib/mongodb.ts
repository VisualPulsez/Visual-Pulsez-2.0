import mongoose from "mongoose";

const connectMongoDB = async () => {
	try {
		if (!process.env.MONGO_URI) {
			throw new Error("MONGO_URI is not defined in environment variables");
		}
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB connected: ${conn.connection.host}`);
	} catch (error: any) {
		console.error(`Error connecting to MongoDB: ${error.message}`);
		process.exit(1);
	}
};

export default connectMongoDB;
