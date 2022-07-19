import axios from "axios";
import config from './config'
const {API} = config

export async function getInicioClases(tipo:Number) {
  const data = await axios.get(`${API}/api/calendario-academico/consultas?tipo=${tipo}`)
  return data.data
}
