import mongoose from "mongoose";


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    gmail:{
        type:String,
        required:true,
        unique:true
    },
    password:{
    type:String,
    required:true,
    // minLength:6,
}
})
  const user=  new mongoose.model("User",userSchema)
  export default user