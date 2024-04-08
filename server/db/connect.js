import mongoose from "mongoose";


const connectDB=async()=> {
    try{
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to mongodb");
    }
    catch(error) {
        console.log("Error connexting to mongodb",error.message);

    };

}

export default connectDB;