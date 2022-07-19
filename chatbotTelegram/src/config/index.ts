import {config} from 'dotenv'

if(process.env.NODE_ENV !== "production"){
  config();
}

export default {
  API: process.env.API,
  BOT_TOKEN: process.env.BOT_TOKEN
}