const express=require("express")
const app=express();

const mongoose=require("mongoose");
 
const cors=require("cors");
app.use(cors());// for connecting frontend to backend

const bcryptjs=require("bcryptjs")
 
const bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
 

mongoose.connect("mongodb://localhost:27017/Bookstore");
const bookSchema=require("./bookstore")


app.get("/book",async(req,res)=>{
    try{
        const data= await  bookSchema.find();
        res.send(data)
    }
    catch(err)
    {
        console.log(err);
        
    }
})

app.listen(5005 );
console.log("Server Listening on port no 5005");

//post
mongoose.connect("mongodb://localhost:27017/Bookstore");
 const User=require("./usermodel");

app.post("/signup",async(req,res)=>{
    

    try {
        const {fullname,email,password}=req.body;
        const user=await User.findOne({email});
        if(user)
        {
            return res.status(400).json({message:"user already exists"});
        }
        const hashPassword=await bcryptjs.hash(password,10);
        const createUser=new User({
            fullname:fullname,
            email:email,
            password:hashPassword,
        });
        await createUser.save();
        res.status(201).json({message:"user created successfully",user:{
            _id:createUser._id,
            fullname:createUser.fullname,
            email:createUser.email,
        }});
    } catch (error) {
        console.log("Error:"+error.message);
        res.status(500).json({message:"Internal server error"});
    }
})
app.listen(5006);
console.log("Server Listening on port no 5006");

app.post("/login",async(req,res)=>{

    try {
        const {email,password}=req.body;
        const user=await User.findOne({email});
        const isMatch= await bcryptjs.compare(password,user.password)
        if(!user || !isMatch)
        {
            return res.status(400).json({message:"Invalid username or password"});
        }
        else{
            res.status(200).json({message:"Login successful",user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email
            }})
        }
        
    } catch (error) {
        console.log("Error:"+error.message);
        res.status(500).json({message:"Internal server error"})
        
    }

})

app.listen(5007);
console.log("Server Listening on port no 5007");

  