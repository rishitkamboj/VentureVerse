const express=require("express");
const router=express.Router();
const zod = require("zod");
const { User} = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const bcrypt = require("bcryptjs");



const  { authMiddleware } = require("../middleware");



const signupbody=zod.object({
     username:zod.string().email(),
     password:zod.string(),
    firstname:zod.string(),
     lastname:zod.string()
});

router.post("/signup",async (req,res)=>{
   const {success}=signupbody.safeParse(req.body);

   if(!success){
     return res.status(411).json({
          message: "Email already taken / Incorrect inputs"
     });
   };

   const u=await User.findOne({username:req.body.username})

if(u){
     return res.status(411).json({
          message: "Email already taken / Incorrect inputs"
})}

const body= req.body;
 const pass= await bcrypt.hash(body.password, 8)

 let user;
try{
user=await User.create({
    username:body.username,
    password:pass,
   firstname:body.firstname,
    lastname:body.lastname,
    accountType:body.accountType
})}
catch(err){
    return res.status(411).json({message: "Error while creating user",
        er:err.message
    })
}
const userid=user._id;

const token=jwt.sign({userid},JWT_SECRET);

res.json({
     message: "User created successfully",
     token: token,
     name: user.firstname
 })


});

const signinBody = zod.object({
     username: zod.string().email(),
      password: zod.string()
 })


 router.post("/signin", async (req, res) => {
    const { success, error } = signinBody.safeParse(req.body);
    if (!success) {
        return res.status(400).json({
            message: "Incorrect inputs",
            error: error.errors
        });
    }

    const user = await User.findOne({
        username: req.body.username
    });

    if (!user) {
        return res.status(401).json({
            message: "Invalid username or password"
        });
    }

    const passwordCheck = await bcrypt.compare(req.body.password, user.password);

    if (passwordCheck) {
        const token = jwt.sign({ userId: user._id }, JWT_SECRET);
        return res.json({
            token: token,
            name: user.firstname
        });
    } else {
        return res.status(401).json({
            message: "Invalid username or password"
        });
    }
});




 router.get('/userinfo', async (req, res) => {
    try {
        const user = await User.findOne({
           _id: req.userId 
        });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json({
            firstname: user.firstname,
            userid:req.userId 
        });
    } catch (error) {
        console.error("Error in /userinfo route:", error); 
        res.status(500).json({ error: "Server Error" });
    }
});





module.exports=router;