import express from 'express'
import { PORT } from './Config/serverConfig.js'

const app=express()


app.listen(PORT,()=>{
      console.log("server is listening on port",PORT);
      

})