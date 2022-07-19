import Server from './server'
import {dbConnection} from './database'

dbConnection()
const server = new Server()
server.listen()

