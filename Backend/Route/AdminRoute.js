import express , {Router} from "express";
import { AdminRegister , LoginC } from "../Controller/AdminController.js";
import { addHotel, Byid, showHotel } from "../Controller/hotelController.js";

const route = express.Router();

route.post("/register",AdminRegister);
route.post("/login",LoginC);
route.post("/createhotel", addHotel);
route.get("/showHotel",showHotel)
route.get("/findById/:id",Byid);

export default route;