import express from 'express'
import { PORT } from './Config/serverConfig.js'
import { connectDb } from './Config/dbConfig.js'

const app=express()


app.listen(PORT,()=>{
      console.log("server is listening on port",PORT);
      connectDb()
      

})