const express=require("express")
require('dotenv').config()
const cors=require("cors")
const connection=require("./config/db")
const {bookRoute}=require("./routes/bookroutes")
const app=express()
app.use(cors())
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("<h1>  home page <h1/>")
})
app.use("/book",bookRoute)


app.listen(process.env.PORT,async()=>{
    console.log("server runig on port 4040")
    try {
        await connection
        console.log("connected to DB")
    } catch (error) {
        console.log("err")
    }
})