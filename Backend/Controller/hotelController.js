import hotelModel from "../Model/hotelModel.js";

export const addHotel = async (req ,res) =>{
    const {hotelImg , hotelName , hBedroom ,hPool ,hAddress , hContact  } = req.body

    try {
        const hoteldata = await hotelModel.create({hotelImg : hotelImg , hotelName : hotelName ,hBedroom : hBedroom ,hPool: hPool, hAddress :hAddress , hContact })
        res.status(200).json(hoteldata);
    } catch (error) {
        console.log(error)
    }
}

export const  showHotel = async (req,res) =>{
        const hotels = await hotelModel.find({})
        res.status(200).json(hotels)
}

export const Byid = async (req,res) =>{
    const findId = await hotelModel.findById(req.params.id)
    res.status(200).json(findId)
}