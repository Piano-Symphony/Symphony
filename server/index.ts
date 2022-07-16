import "dotenv/config";
import express, {Request, Response}from "express";
import {PrismaClient} from "@prisma/client"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
const SECRET_JWT_CODE = "psmR3Hu0ihHKfqZymo1m"
import cors from 'cors';
import { equal } from "assert";
const Port = 3000

const app = express()


const prisma = new PrismaClient();

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));


// get user 
app.get("/users", async (req:Request, res:Response) => {
    try {
      const user = await prisma.user.findMany()
  
      res.json(user)
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong",
      })
    }
  })

  app.post("/users", async (req:Request, res:Response) => {
    try {  
      const user= await prisma.user.create({
        data: {
            email: req.body.email,
            userName:req.body.email,
            img: req.body.img,
        },
      })
      
      res.json(user)
    } catch (error: any) {
      console.log(error.message)
      res.status(500).json({
        message: "Internal Server Error",
      })
    }
  })

app.get("/sheet",async (req:Request, res:Response)=>{
  try {
    const sheet =  await prisma.sheet.findMany()
    res.json(sheet)
  } catch(error:any){
    res.status(500).json({
      message: "Something went wrong",
    })
  }
})

app.get("/sheet/beginner",async (req:Request,res:Response)=>{
  try{
    const sheet = await prisma.sheet.findMany(
      {where:{
        level:{
          equals:"Beginner"
        }
      }})
      res.json(sheet)
  }catch(error:any){
    res.status(500).json({
      message: "Something went wrong",
    })
  }
})

app.get("/sheet/intermediate",async (req:Request,res:Response)=>{
  try{
    const sheet = await prisma.sheet.findMany(
      {where:{
        level:{
          equals:"Intermediate"
        }
      }})
      res.json(sheet)
  }catch(error:any){
    res.status(500).json({
      message: "Something went wrong",
    })
  }
})

app.get("/sheet/master",async (req:Request,res:Response,)=>{
  try{
    const sheet = await prisma.sheet.findMany(
      {where:{
        level:{
          equals:"Master"
        }
      }})
      res.json(sheet)
  }catch(error:any){
    res.status(500).json({
      message: "Something went wrong",
    })
  }
})

//getting one sheet 

 app.get('/sheet/:id',async (req:Request,res:Response)=>{
  try{
    const sheetId = Number(req.params.id) as number
  
    const sheet = await prisma.sheet.findUnique(
      {where:{
        id:sheetId
      }})
      res.json(sheet)
  }catch(error:any){
    res.status(500).json({
      message: "Something went wrong",
    })
  }
 })

 // search bar 

 app.get("/:term", async (req:Request, res:Response)=>{
   try {
    console.log(req.params.term)
    const sheet = await prisma.sheet.findMany({
      where:{
        name:{
          in: req.params.term
        }
      }
    })
    res.json(sheet)
  }catch(error:any){
    res.status(500).json({
      message: error,
    })
  }
 })

  // post singUp

  // app.post('/login', async (req, res) => {
  //   try {
  //     console.log(req.cookies, req.get('origin'));
  //     const { email, password } = req.body;
  //     const users = await singUp.query('SELECT * FROM users WHERE user_email = $1', [email]);
  //     if (users.rows.length === 0) return res.status(401).json({error:"Email is incorrect"});
  //     //PASSWORD CHECK
  //     const validPassword = await bcrypt.compare(password, users.rows[0].user_password);
  //     if (!validPassword) return res.status(401).json({error: "Incorrect password"});
  //     //JWT
  //     let tokens = jwt(users.rows[0]);//Gets access and refresh tokens
  //     res.cookie('refresh_token', tokens.refreshToken, {...(process.env.COOKIE_DOMAIN && {domain: process.env.COOKIE_DOMAIN}) , httpOnly: true,sameSite: 'none', secure: true});
  //     res.json(tokens);
  //   } catch (error) {
  //     res.status(401).json({error: error.message});
  //   }
  
  // });




app.listen(3000, () => {
    console.log("App listening on port 3000 little pajaro");
  });