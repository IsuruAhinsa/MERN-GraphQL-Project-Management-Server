import mongoose from "mongoose";

const connectMongoDB = async () => {
  mongoose.set("strictQuery", false);
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log(`MongoDB Connected: ${mongoose.connection.host}` . cyan.underline.bold);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export default connectMongoDB;
