import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/next-course");
    const connection = mongoose.connection;
    connection.once("connected", () => {
      console.log("mongo connected Successfully");
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
