import express from "express"
import users from './ROUTES/Users.Rotes.js'
const app = express()
app.use("/api/onlinelearning",users)
app.listen(3000,()=>{
    console.log("server running");
    
})