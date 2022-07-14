import "dotenv/config";
import express from "express";
import {PrismaClient} from "@prisma/client"
const Port= 3000

const app = express()


const prisma = new PrismaClient();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// get 
app.get("/users", async (req, res) => {
    try {
      const user = await prisma.user.findMany()
  
      res.json(user)
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong",
      })
    }
  })

  app.post("/users", async (req, res) => {
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

app.get("/sheet",async (req,res,next)=>{
  try {
    const sheet =  await prisma.sheet.findMany()
    res.json(sheet)
  } catch(error:any){
    next(error.message)
  }
})








app.listen(3000, () => {
    console.log("App listening on port 3000 littel pajaro");
  });