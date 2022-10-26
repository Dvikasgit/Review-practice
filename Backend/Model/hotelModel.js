import mongoose, { model, Schema } from 'mongoose'

const hotelSchema = Schema({
    hotelImg :{
        type : String,
        require : true
    },
    hotelName : {
        type : String,
        require : true
    },
    hBedroom : {
        type : String,
        require : true
    },
    hPool : {
        type : String,
        require : true
    },
    hAddress : {
        type : String,
        require : true
    },
    hContact : {
        type : String,
        require : true
    } 
})

const hotelModel = mongoose.model("hoteldata",hotelSchema);

export default hotelModel;