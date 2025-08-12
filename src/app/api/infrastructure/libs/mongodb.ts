import mongoose from "mongoose";
import { getMongoDbUri } from "../../core/application/features/helpers/EnvironmentHelper";

const connectMongoDb= async() => {
    try {
        console.log("Connecting to MongoDB...");
        await mongoose.connect(`${getMongoDbUri()}`);
        console.log("Connected to MongoDB.");
    } catch (error) {
        console.log(error);
    }
}

export default connectMongoDb;