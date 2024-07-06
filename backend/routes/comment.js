const express = require('express');
const { authMiddleware } = require('../middleware');
const { Comment } = require('../db');
const mongoose = require('mongoose');  

const router = express.Router();

router.get("/:id",async (req, res) => {
    try {
        const comments = await Comment.find({
            blogId: req.params.id
        });

        res.json({
            comments: comments.map((comment) => {
                return {
                    id: comment._id,
                    body: comment.body
                }
            })
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error"
        });
    }
});

router.post("/:id", authMiddleware,async (req, res) => {
    const { body } = req.body;
   

    if (!body || !userId) {
        return res.status(400).json({
            message: "Missing required fields"
        });
    }

    try {
        const comment = await Comment.create({
            userId: req.user.id,
            blogId: req.params.id,
            body
        });

        res.json({
            message: "Comment created successfully",
            comment: {
                id: comment._id,
                body: comment.body
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
});




router.delete("/:id",authMiddleware, async (req, res) => {
    try{
        const comment = await Comment.findOneAndDelete({
            _id: req.params.id,
            userId:req.userId
        });

        if(!comment){
            return res.status(400).json({
                message: "Error while deleting comment"
            });
        }

        res.json({
            message: "Comment deleted successfully"
        });
    }
    catch(error){
        res.status(500).json({
            message: "Internal server error"
        });
    }
})

module.exports = router;
