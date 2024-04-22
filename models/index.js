import mongoose from "mongoose";
import { Course } from "./Course.js"


(async () => {
    //await mongoose.connect(`mongodb://127.0.0.1:27017/academic`);
    await mongoose.connect(`mongodb+srv://dbUser:dbUser@cluster0.enbv6.mongodb.net/academic`);
})();

export const db = {
    Course,
};
