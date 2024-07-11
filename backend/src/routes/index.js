const express =require("express")
const callSearchRoute=require("./callSearchApi.route")
const router=express.Router();

//call search routes
 router.use('/api/v1/google',callSearchRoute);



module.exports= router