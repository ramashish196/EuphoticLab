import dishModel from "../models/dishSchema.js";

const homeRoute = async (req, res) => {
	try {
		const result = await dishModel.find();
		// console.log(result);
		res.status(201).json(result);
	} catch (error) {
		console.log("error while creating userSchema", error);
	}
};

const toggleDish = async (req, res) => {
	console.log(req.params.dishId);
	try {
		const dish = await dishModel.findOne({ dishId: req.params.dishId });
		if (!dish) {
			return res.status(404).json({ message: "Dish not found" });
		}

		const updatedDish = await dishModel.findOneAndUpdate(
			{ dishId: req.params.dishId },
			{ $set: { isPublished: !dish.isPublished } },
			{ new: true } // This option returns the updated document
		);

		console.log(updatedDish);
		res.json({ message: "Dish data updated", dish: updatedDish });
	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}
};

export { homeRoute, toggleDish };
