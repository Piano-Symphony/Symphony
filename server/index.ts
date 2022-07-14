import "dotenv/config";
import express from "express";

const app = express()




app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// get 
app.get('/get',async(req,res,next)=>{
    
})









app.listen(3000, () => {
    console.log("App listening on port 3000 littel pajaro");
  });