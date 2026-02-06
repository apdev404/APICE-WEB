import axios from 'axios'
import { REST_SERVER_URL } from './configuration' 
import { getAxiosData } from "./common";
import { Capacitacion, CapacitacionDetalle, type CapacitacionJSON, type CapacitacionDetalleJSON } from '$lib/domain/capacitacion';

class CapacitacionesService{
    async getCapacitaciones(){
        const response = () => axios.get<CapacitacionJSON[]>(REST_SERVER_URL + '/capacitaciones')
        return (await getAxiosData(response)).map(Capacitacion.fromJson)
    }


    async getCapacitacionesByText(text: string){
        const response = ()=> axios.get<CapacitacionJSON[]>(REST_SERVER_URL+'/capacitaciones/search?'+text)
        return (await getAxiosData(response)).map(Capacitacion.fromJson)
    }

    async getCapacitacionessById(text: string){
        const response = ()=> axios.get<CapacitacionDetalleJSON>(REST_SERVER_URL+'/capacitaciones/'+text)
        const capacitacionDetalleJSON = await getAxiosData(response)
        return CapacitacionDetalle.fromJson(capacitacionDetalleJSON)
    }
}

export const capacitacionesService = new CapacitacionesService()