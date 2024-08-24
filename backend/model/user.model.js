import mongoose from "mongoose";

const userschema=mongoose.Schema({
     fullname:{
      type:String,
      require:true
    },
    email:{
        type:String,
        require:true,

    },
    password:{
        type:String,
        require:true
    },
    }) 
    const user=mongoose.model("user",userschema);
    export default user;
