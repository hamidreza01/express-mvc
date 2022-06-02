import mongoose from "mongoose";
const schema = new mongoose.Schema({
    name : {type : String, required : true},
    age : {type : Number, required : true},
})
export default mongoose.model("testModel", schema,"testModels");