const express=require("express")

const {bookModel}=require("../modules/bookmodel")
const bookRoute=express.Router()
bookRoute.post("/bookadd",async(req,res)=>{
    const {
        title,author,genre,descripton,price}=req.body
    try {
        let book=new bookModel({title,author,genre,descripton,price})
        await book.save()
        res.send({"msg":" New Book Added"})
    } catch (error)
     {
        console.log(error)
        res.send({"error":error})
    }
})


bookRoute.get("/books",async(req,res)=>{
    try {
        let data=await bookModel.find()
        res.send({"products":data})
    } catch (error) {
        console.log("error")
        res.send({"error":error})
    }
})

//SORT
bookRoute.get("/sort",async(req,res)=>{
   
    try {
        let data=await bookModel.find().sort({price:req.query.sort})
        res.send(
            {"products":data})
    } catch (error)
     {
        console.log("error")
        res.send({"error":error})
    }
})


// Filter

bookRoute.get("/filter",async(req,res)=>{
    const filter=req.query.filter
    try {
        let data=await bookModel.find({genre:filter})
        res.send({"products":data})
    } catch (error) {
        console.log("not abel to filter",error)
        res.send({"error":error})
    }
})


bookRoute.get("/filterandSort",async(req,res)=>{
    try {
        let data=await bookModel.find({genre:req.query.filter}).sort({price:req.query.sort})
        res.send({"products":data})
    } catch (error) {
        console.log("error")
        res.send({"error":error})
    }
})
module.exports={
    bookRoute
}
