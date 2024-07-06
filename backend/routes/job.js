const express = require('express');
const { authMiddleware } = require('../middleware');
const { Job } = require('../db');
const mongoose = require('mongoose');  

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const jobs = await Job.find();

        res.json({
         job: jobs.map((job) => {
                return {
                    id: job._id,
                    title:job.title,
                    description:job.description,
                    location:job.location,
                    userId:job.userId,
                    contact:job.contact
                }
            })
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error"
        });
    }
});

router.post("/postjob",authMiddleware, async (req, res) => {
    try {
        const job = await Job.create({
            userId: req.userId,
            title: req.body.title,
            description: req.body.description,
            location: req.body.location,
            contact: req.body.contact   
        });

        if (!job) {
            return res.status(400).json({
                message: "Error while creating job"
            });
        }

        res.json({
            message: "Job created successfully",
            job: {
                id: job._id,
                body: job.body
            }
        });

    } catch (error) {
        res.status(500).json({
            message: "Internal server error"
        });
    }
});




router.delete("/:id",authMiddleware, async (req, res) => {
    try{
        const job= await Job.findOneAndDelete({
            _id: req.params.id,
            userId: req.userId
        });

        if(!job){
            return res.status(400).json({
                message: "Error while deleting job"
            });
        }

        res.json({
            message: "Job deleted successfully"
        });
    }
    catch(error){
        res.status(500).json({
            message: "Internal server error"
        });
    }
})

module.exports = router;
