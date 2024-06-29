const mongoose = require("mongoose")
const express = require ("express")
const cors = require ("cors")
const app = express()
const { usermodel } = require("./models/users")
const { postmodel } = require("./models/posts")
const bcryptjs = require("bcryptjs")
const jwt=require("jsonwebtoken")


mongoose.connect("mongodb+srv://adith:adith@cluster0.7mlz85p.mongodb.net/blog-app-2?retryWrites=true&w=majority&appName=Cluster0")


const generateHashPswd = async (pswd) => {
    const salt = await bcryptjs.genSalt(10)
    return bcryptjs.hash(pswd, salt)
}


app.post("/signup", async (req, res) => {
    let input = req.body
    let hashedpswd = await generateHashPswd(input.pass)
    console.log(hashedpswd)
    input.pass = hashedpswd
    let newusers = new usermodel(input)
    newusers.save()
    res.json({ "status": "success" })
})

app.post("/add", (req, res) => {
    let input = req.body
    let posts = new postmodel(input)
    buses.save()
    console.log(postss)
    res.json({ "status": "success" })
})


app.listen(8080, () => {
    console.log("Server started on port 8080")
})