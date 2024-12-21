import express from 'express'
import { PORT } from './Config/serverConfig.js'
import { connectDb } from './Config/dbConfig.js'
import apiRoute from "./routes/apiRoute.js"

const app=express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1",apiRoute)


app.listen(PORT,()=>{
      console.log("server is listening on port",PORT);
      connectDb()    

})