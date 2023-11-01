//console.log("App running");
import express from 'express';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
import multer from 'multer';
import bodyParser from 'body-parser'; //npm i body-parser
import cors from 'cors';  //npm i cors
import student from './models/student.js';
import user from './models/user.js';
import course from './models/course.js';
import auth from './models/auth.js';

//const express=require('express');
// const app=express();
// mongoose.connect('mongodb+srv://21a91a05h6:tCzM401u6J8ISh4K@cluster0.dokd585.mongodb.net/Work?retryWrites=true&w=majority')
// .then(() => app.listen(5000))
// .then(() =>console.log("Connected to Database & Listining to localhost 5000"))
// .catch((err) => console.log(err));
//console.log("testing!!"); 
//const express=require('express)
const app=express();

app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb+srv://21a91a05h6:QqEtic9RcXTGtgOL@cluster0.dokd585.mongodb.net/Work?retryWrites=true&w=majority') 
.then(() => app.listen(5000))
.then(() =>
console.log("Connected to Database & Listining to localhost 5000")
)
.catch((err) => console.log(err));
//http://localhost:2222/adddata

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, 'public/images')
    },
    filename: function (req, file, callback) {
      // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      callback(null, Date.now()+"_"+file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

app.post('/addstudent',(req,res,next)=>{
    //performs the action
    console.log(req.body.formdata) //form data from the frontend
    const {name,rollno,clg,branch}=req.body.formdata;
    const stud=new student({
        name,
        rollno,
        clg,
        branch
    })
    stud.save()
    return res.send({"students":stud})
    // res.send({"msg":"success"})
})


app.post('/adduser',upload.single('myfile'),(req,res,next)=>{
    //performs the action
    console.log(req.body.formdata) //form data from the frontend
    const profile=(req.file) ? req.file.filename:null
    const {email,username,password}=req.body;
    const userform=new user({
        email,
        username,
        password,
        profile
    })
    userform.save()
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'polisettisridivyaprabha@gmail.com',
          pass: 'pqbb diuo tcrk rvxl'
        }
      });
      
      var mailOptions = {
        from: 'polisettisridivyaprabha@gmail.com',
        to: email,
        subject: 'Sending Email using Node.js',
        text: 'That was easy!',
        attachments: [
            {
            filename: req.profile+".jpg",
            contentType:'image/jpg',
            path:'public/images/'+profile
            }
            ]
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    return res.send({"users":userform,msg:"success"})
    // res.send({"msg":"success"})
})


app.post('/addcourse',(req,res,next)=>{
    //performs the action
    console.log(req.body.formdata) //form data from the frontend
    const {coursename,fee}=req.body.formdata;
    const courseform=new course({
        coursename,
        fee
    })
    courseform.save()
    return res.send({"courses":courseform})
    // res.send({"msg":"success"})
})


app.get('/getstudents',async(req,res,next)=>{
    let students;
    try{
        students=await student.find();//db.collectionname.find()
    }catch(err){
        console.log(err);
    }
    if(!students){
        return res.status(404).json({message:"No students Found."})
    }
    return res.status(200).json({students})
})


app.get('/getuser',async(req,res,next)=>{
    let us;
    try{
        us=await user.find();//db.collectionname.find()
    }catch(err){
        console.log(err);
    }
    if(!us){
        return res.status(404).json({message:"No users Found."})
    }
    return res.status(200).json({us})
})


app.get('/getcourse',async(req,res,next)=>{
    let cd;
    try{
        cd=await course.find();//db.collectionname.find()
    }catch(err){
        console.log(err);
    }
    if(!cd){
        return res.status(404).json({message:"No courses Found."})
    }
    return res.status(200).json({cd})
})


app.delete('/deletestudent/:id',async(req,res,next)=>{
    let studentdata;
    const id=req.params.id
    try{
        studentdata=await student.findByIdAndDelete({_id:id})
    }
    catch(err){
        console.log(err)
    }
    if(!studentdata){
        console.log("no students found");
    }
    return res.status(200).json({studentdata})
})

app.delete('/api/deleteuser/:userid', async(req,res,next)=>{
    const _id=req.params.userid
    let users;
    try{
        users=await user.findByIdAndDelete(_id);
    }catch(err){
        return console.log(err)
    }
    if(!users){
        return res.status(400).json({message:"Unable to delete the user."})
    }
    return res.status(200).json({msg:"deleted"})
})

app.delete('/api/deletecourse/:courseid', async(req,res,next)=>{
    const _id=req.params.courseid
    let dcourse;
    try{
        dcourse=await course.findByIdAndDelete(_id);
    }catch(err){
        return console.log(err)
    }
    if(!dcourse){
        return res.status(400).json({message:"Unable to delete the course."})
    }
    return res.status(200).json({msg:"deleted"})
})

app.get('/getuserbyid/:id', async(req,res,next)=>{
    const _id=req.params.id
    let usersd;
    try{
        usersd= await user.findById(_id);
    }catch(err){
        return console.log(err)
    }
    if(!usersd){
        return res.status(400).json({message:"No Users Found"});
    }
    return res.status(200).json({usersd})
})

app.put('/edituser/:id',async(req,res,next)=>{
    const _id=req.params.id
    const {email,username,password}=req.body
    let use
    try{
        use= await user.findByIdAndUpdate(_id,
            {
                email,
                username,
                password
            })
    }
    catch(err){
        console.log(err)
    }
    return res.send({msg:"Updated","result":use})
})

app.get('/getstudentbyid/:id', async(req,res,next)=>{
    const _id=req.params.id
    console.log(_id);
    let students;
    try{
        students=await student.findById(_id);//db.collectionname.find()
    }catch(err){
        console.log(err);
    }
    if(!students){
        return res.status(404).json({message:"No students Found."})
    }
    return res.status(200).json({students})

})

app.put('/updatestudent/:id',async(req,res,next)=>{
    const _id=req.params.id
    const {name,rollno,clg,branch}=req.body
    let stud
    try{
        stud= await student.findByIdAndUpdate(_id,
            {
                name,
                rollno,
                clg,
                branch
            })
    }
    catch(err){
        console.log(err)
    }
    return res.send({msg:"Updated","result":stud})
})

app.get('/getcoursebyid/:id', async(req,res,next)=>{
    const _id=req.params.id
    // console.log(_id);
    let cd;
    try{
        cd=await course.findById(_id);//db.collectionname.find()
    }catch(err){
        console.log(err);
    }
    if(!cd){
        return res.status(404).json({message:"No courses Found."})
    }
    return res.status(200).json({cd})

})

app.put('/updatecourse/:id',async(req,res,next)=>{
    const _id=req.params.id
    const {coursename,fee}=req.body
    let coursed
    try{
        coursed= await course.findByIdAndUpdate(_id,
            {
                coursename,
                fee
            })
    }
    catch(err){
        console.log(err)
    }
    return res.send({msg:"Updated","result":coursed})
})

app.post('/addauth',async(req,res,next)=>{
    //performs the action
    // console.log(req.body.formdata) //form data from the frontend
    // const {uname,pass}=req.body.formdata;
    // const authenticate=new auth({
    //     uname,
    //     pass
    // })
    // authenticate.save()
    const { uname, pass } = req.body.formdata;

  const authenticate = await auth.findOne({ uname, pass });
    if (authenticate) {
        res.json({ msg: 'Login successful' });
    } else {
        res.status(201).json({ msg: 'Login failed' });
    }
      //return res.send({"authentication":authenticate,msg:"success"})
    // res.send({"msg":"success"})
})
// app.use('/testing',(req,res,next)=>{
//     res.send("FSD Drive ready testing!!");
// })
//app.listen(2222)
 
//backend:/api
//http://localhost:2222/api
// app.use('/api',(req,res,next)=>{
//     res.send("Hello World!");
// })

// app.use('/testing',(req,res,next)=>{
//     res.send("testing");
// })

//app.listen(5000);

//backend:/api
//http://localhost:2222/api- it is a local api works only on this PC.