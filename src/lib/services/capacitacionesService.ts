import axios from 'axios'
import { REST_SERVER_URL } from './configuration' 
import { getAxiosData } from "./common";
import { Capacitacion, type CapacitacionJSON } from '$lib/domain/capacitacion';

class CapacitacionesService{
    async getCapacitaciones(){
        const response = () => axios.get<CapacitacionJSON[]>(REST_SERVER_URL + '/capacitaciones')
        return (await getAxiosData(response)).map(Capacitacion.fromJson)
    }


    async getCapacitacionesByText(text: string){
        const response = ()=> axios.get<CapacitacionJSON[]>(REST_SERVER_URL+'/capacitaciones/search?='+text)
        return (await getAxiosData(response)).map(Capacitacion.fromJson)
    }
}

export const capacitacionesService = new CapacitacionesService()