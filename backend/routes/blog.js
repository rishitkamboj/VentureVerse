const express=require("express");
const router=express.Router();

const { Blog} = require("../db");
const mongoose = require('mongoose');


const  { authMiddleware } = require("../middleware");


router.get("/",async (req, res) => {
     try {
         const blogs = await Blog.find();
         res.status(200).json(blogs);
     } catch (error) {
         res.status(500).json({ message: "An error occurred while fetching blogs.", error });
     }
 });
 

 router.post("/post",authMiddleware,async (req, res) => {
     const { title,body } = req.body;
 
     try {
         const post = await Blog.create({
             title: title.slice(0, 100),
             author: req.userId,
             body:body
         });
 
         if (!post) {
             return res.status(411).json({
                 message: "Post not created"
             });
         }
 
         res.status(201).json({
             message: "Posted successfully",
             post: post
         });
     } catch (error) {
         res.status(500).json({
             message: "An error occurred while creating the post",
             error: error.message
         });
     }
 });

 router.get("/post/:id", async (req, res) => {
     try {
         console.log("Received ID:", req.params.id);
         const post = await Blog.findOne({ _id: req.params.id });
         if (!post) {
             console.log("Post not found");
             return res.status(411).json({
                 message: "Post not found"
             });
         }
         console.log("Post found:", post);
         res.json({
             title: post.title,
             body: post.body,
             date: post.date
         });
     } catch (error) {
         console.error("Error fetching post:", error);
         res.status(500).json({
             message: "Server error"
         });
     }
 });
 

 router.delete("/post/:id",authMiddleware,async (req, res) => {
     try {
       
         if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
             return res.status(400).json({
                 message: "Invalid ID format"
             });
         }
 
       
         const post = await Blog.findById(req.params.id);
         if (!post) {
             console.log("Post not found:", req.params.id);
             return res.status(411).json({
                 message: "Post not found"
             });
         }
 
       
         await Blog.deleteOne({ _id: req.params.id });
         console.log("Post deleted successfully:", req.params.id);
         
       
         res.json({
             message: "Post deleted successfully"
         });
     } catch (error) {
         console.error("Error deleting post:", error);
         res.status(500).json({
             message: "Server error"
         });
     }
 });

router.put("/post/:id",authMiddleware,async (req,res)=>{

     try {
       
          if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
              return res.status(400).json({
                  message: "Invalid ID format"
              });
          }
  
        
          const post = await Blog.findById(req.params.id);
          if (!post) {
              console.log("Post not found:", req.params.id);
              return res.status(411).json({
                  message: "Post not found"
              });
          }

          const body=req.body;
          if(body.title){
            post.title=body.title;
          }
          if(body.body){
            post.body=body.body;
          }
          await post.save();
  
          console.log("Post saved successfully:", req.params.id);
          
        
          res.json({
              message: "Post save successfully",
              body:post.body,
                 title:post.title
          });
      } catch (error) {
          console.error("Error deleting post:", error);
          res.status(500).json({
              message: "Server error"
          });
      }
    
});



module.exports=router;