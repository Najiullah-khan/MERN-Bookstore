import mongoose from "mongoose";
const bookSchema=mongoose.Schema({

    name:String,
    image:String,
    category:String,
    title:String,
    price:Number
})
const Book=mongoose.model("Book",bookSchema)
export default Book;