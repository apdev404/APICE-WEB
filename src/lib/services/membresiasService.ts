import axios from 'axios'
import { REST_SERVER_URL } from './configuration' 
import { getAxiosData } from "./common";
import { type MembresiaJSON, Membresia } from '$lib/domain/membresias';


class MembresiasService{
    async getMembresias(){
        const response = () => axios.get<MembresiaJSON[]>(REST_SERVER_URL + '/membresias')
        return (await getAxiosData(response)).map(Membresia.fromJson)
    }


    async getMembresiasById(text: string){
        const response = ()=> axios.get<MembresiaJSON>(REST_SERVER_URL+'/membresias/search?text='+text)
        const membresiaJSON = await getAxiosData(response)
        return Membresia.fromJson(membresiaJSON)
    }
}


export const membresiasService = new MembresiasService()