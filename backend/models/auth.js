import mongoose from "mongoose";
const Schema=mongoose.Schema;

const auth=new Schema({
    uname:{
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true
    },
});
export default mongoose.model('authentication',auth);
                        //collection name, variable