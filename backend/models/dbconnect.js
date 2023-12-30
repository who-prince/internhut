import mongoose from "mongoose";

const dbconnect = () =>
  mongoose
    .connect(
      "mongodb+srv://anshu:anshu@cluster0.wuyraqg.mongodb.net/?retryWrites=true&w=majority",
      { dbName: "InternHut2" }
    )
    .then(() => {
      console.log("DB connected");
    })
    .catch((error) => {
      console.log("error while connecting the DB !" + error);
    });

export default dbconnect;
