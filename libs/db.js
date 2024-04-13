import Mongoose from "mongoose"

async function connectDB() {
	if (Mongoose.connection.readyState >= 1) {
		console.log("MongoDB is already connected")
		return
	}
	try {
		await Mongoose.connect(process.env.MONGODB_URI)
		console.log("MongoDB connected")
	} catch (error) {
		console.log("MongoDB connection Error occurred", error)
	}
}

export default connectDB
