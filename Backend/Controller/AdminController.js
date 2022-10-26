import express from "express";
import AdminModel from "../Model/AdminModel.js";

export const AdminRegister = async (req,res) => {
    const {fName , email , password} = req.body
    console.log(req.body)
    try {
        const avilable = await AdminModel.findOne({email:email})
        if(avilable){
            res.status(400).json("Email already exists")
        }
        else{
            const Valid = await AdminModel.create({fName : fName , email : email , password : password})
            res.status(200).json(Valid);

        }
        res.send()
    } catch (error) {
        console.log(error)
    }
}


export const LoginC = async(req,res) =>{
    const {email , password} = req.body
    try {
        const valid = await AdminModel.findOne({email : email , password : password})
        if(valid){
            res.status(200).json("Login successfully")
        }
        else{
            res.status(400).json("Invalid userid or password");
        }
    } catch (error) {
        console.log(error)
    }
}