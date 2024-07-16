import mongoose from "mongoose";
const dishSchema = new mongoose.Schema({
	dishId: { type: String },
	dishName: { type: String },
	imageUrl: { type: String },
	isPublished: { type: Boolean },
});
const dishModel = mongoose.model("dishlist", dishSchema);

export default dishModel;
