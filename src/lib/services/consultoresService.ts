import axios from 'axios'
import { REST_SERVER_URL } from './configuration' 
import { getAxiosData } from "./common";
import {Consultor, type ConsultorJSON } from '$lib/domain/consultor';

class ConsultorService{
    async getConsultores(){
        const response = () => axios.get<ConsultorJSON[]>(REST_SERVER_URL + '/consultores')
        return (await getAxiosData(response)).map(Consultor.fromJson)
    }


    async getConsultoresByText(text: string){
        const response = ()=> axios.get<ConsultorJSON[]>(REST_SERVER_URL+'/consultores/search?text='+text)
        return (await getAxiosData(response)).map(Consultor.fromJson)
    }
}


export const consultoresService = new ConsultorService()