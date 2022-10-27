import mongoose, { Schema } from "mongoose";

const ratingSchema = Schema(
    [
    {
  rate: {
    type: Number,
    require: true,
  },
  feedback: {
    type: String,
    require: true,
  },
}
]);
const ratindModel = mongoose.model("ratingHotel", ratingSchema);

export default ratindModel;
