import config from '../config'
import mongoose from 'mongoose'

export function dbConnection(){
  mongoose.connect(config.MONGO_URI as string)
  .then(()=>{
    console.log('BD conectada!');    
  })
  .catch(()=>{
    console.log('Error ***********');
    
  })
}