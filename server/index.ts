import "dotenv/config";
import express, {Request, Response}from "express";
import {PrismaClient} from "@prisma/client"
import cors from 'cors';
const Port= 3000

const app = express()


const prisma = new PrismaClient();

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));


// get 
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








app.listen(3000, () => {
    console.log("App listening on port 3000 little pajaro");
  });