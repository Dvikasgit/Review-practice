import express , {Router} from "express";
import { AdminRegister , LoginC } from "../Controller/AdminController.js";
import { addHotel, Byid, showHotel } from "../Controller/hotelController.js";
import { RatingController, ratingFindId, showrat } from "../Controller/RatingController.js";

const route = express.Router();

route.post("/register",AdminRegister);
route.post("/login",LoginC);
route.post("/createhotel", addHotel);
route.get("/showHotel",showHotel)
route.get("/findById/:id",Byid);
route.post("/createRating",RatingController);
route.get("/rateallget",showrat);
route.get("/ratingid/:id",ratingFindId)

export default route;