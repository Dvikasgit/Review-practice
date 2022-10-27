import ratindModel from "../Model/ratingModel.js";

export const RatingController = async (req,res) => {
    const {rate , feedback } = req.body
try {
    const createRating = await ratindModel.create({rate: rate , feedback : feedback});
    res.status(200).json(createRating);
} catch (error) {
    console.log(error)
}    
}


export const ratingFindId = async (req,res) =>{
    const findId = await ratindModel.findById(req.params.id);
    res.status(200).json(findId)

}


export const  showrat = async (req,res) =>{
    const rating = await ratindModel.find({})
    res.status(200).json(rating)
}

