import {config} from 'dotenv'

if(process.env.NODE_ENV !== "production"){
  config();
}

export default {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT,
  SECRET: process.env.SECRET
}