const express =require("express")
const  callSearchController =require("../controllers/callSearchApiController.js");
const router=express.Router();

router.get('/search',callSearchController.search);


module.exports=router