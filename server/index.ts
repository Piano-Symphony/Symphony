import "dotenv/config";
import express from "express";
import {PrismaClient} from "@prisma/client"
const Port= 3000

const app = express()


const prisma = new PrismaClient();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// get 
app.get("/get", async (req, res, next) => {
    try {
      const posts = await prisma.post.findMany({
        where: {
          email: true,
        },
       
      });
  
      res.json({ posts });
    } catch (error: any) {
      next(error.message);
    }
  });








app.listen(3000, () => {
    console.log("App listening on port 3000 littel pajaro");
  });