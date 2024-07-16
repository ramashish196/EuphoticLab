import mongoose from "mongoose";
export const connectDB = async (uri) => {
  try {
    const option = {
      dbName: "dishdata",
    };
    await mongoose.connect(uri, option);
    console.log("DB connected successfully");
  } catch (error) {
    console.log("error while connecting database", error);
  }
};
