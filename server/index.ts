import "dotenv/config";
import express from "express";
import {PrismaClient} from "@prisma/client"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
const Port= 3000
const SECRET_JWT_CODE = "psmR3Hu0ihHKfqZymo1m"

const app = express()


const prisma = new PrismaClient();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// get user
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
//post user
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


  // post singUp

  app.post('/login', async (req, res) => {
    try {
      console.log(req.cookies, req.get('origin'));
      const { email, password } = req.body;
      const users = await singUp.query('SELECT * FROM users WHERE user_email = $1', [email]);
      if (users.rows.length === 0) return res.status(401).json({error:"Email is incorrect"});
      //PASSWORD CHECK
      const validPassword = await bcrypt.compare(password, users.rows[0].user_password);
      if (!validPassword) return res.status(401).json({error: "Incorrect password"});
      //JWT
      let tokens = jwt(users.rows[0]);//Gets access and refresh tokens
      res.cookie('refresh_token', tokens.refreshToken, {...(process.env.COOKIE_DOMAIN && {domain: process.env.COOKIE_DOMAIN}) , httpOnly: true,sameSite: 'none', secure: true});
      res.json(tokens);
    } catch (error) {
      res.status(401).json({error: error.message});
    }
  
  });




app.listen(3000, () => {
    console.log("App listening on port 3000 littel pajaro");
  });