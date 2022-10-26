import mongoose, { Schema } from "mongoose";

const AdminSchema = Schema({
    fName : {
        type : String,
        require: true
    },
    email : {
        type : String,
        require : true
    },
    password : {
        type : Number,
        require : true
    }
})

const AdminModel = mongoose.model("admin",AdminSchema);

export default AdminModel;