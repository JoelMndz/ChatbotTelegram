import express from "express"
import morgan from "morgan";
import cors from 'cors'

import routes from './routes';
import config from './config'
const {PORT} = config;
const {CalendarioAcademicoRoute} = routes;

class Server{
  private app;

  constructor(){
    this.app = express();
    this.configutarion();
    this.middlewares();
    this.routes();
  }

  configutarion(){
    this.app.set('port', PORT);
    
  }

  middlewares(){
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes(){
    this.app.get('/',(req , res)=>{
      res.json({
        name:'REST API - CALENDARIO ACADEMICO ULEAM'
      })
    });

    this.app.use('/api/calendario-academico', CalendarioAcademicoRoute)
  }

  listen(){
    this.app.listen(this.app.get('port'),()=>{
      console.log(`Server on port ${this.app.get('port')}`);
    })
  }
}

export default Server