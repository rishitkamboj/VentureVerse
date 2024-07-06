const express=require("express");
const router=express.Router();
const userRouter = require("./user");
const commentRouter=require("./comment");
const blogRouter=require("./blog");
const messageRouter=require("./messages");
const jobRouter=require("./job");


router.use("/user",userRouter);
router.use("/comment",commentRouter);
router.use("/blog",blogRouter);    
router.use("/messages",messageRouter);
router.use("/job",jobRouter);

module.exports=router;