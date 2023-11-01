import mongoose from "mongoose";
const Schema=mongoose.Schema;

const courses=new Schema({
    coursename:{
        type:String,
        required:true
    },
    fee:{
        type:String,
        required:true
    }
});
export default mongoose.model('courses',courses);