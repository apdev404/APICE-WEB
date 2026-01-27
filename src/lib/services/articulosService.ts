import axios from 'axios'
import { REST_SERVER_URL } from './configuration' 
import { getAxiosData } from "./common";
import { Articulo, type ArticulosJSON } from '$lib/domain/articulos';

class ArticulosService{
    async getArticulos(){
        const response = () => axios.get<ArticulosJSON[]>(REST_SERVER_URL + '/redacciones')
        return (await getAxiosData(response)).map(Articulo.fromJson)
    }

    async getLastArticulos(){
        const response = () => axios.get<ArticulosJSON[]>(REST_SERVER_URL + '/redacciones/last')
        return (await getAxiosData(response)).map(Articulo.fromJson)
    }

    async getArticulosByText(text: string){
        const response = ()=> axios.get<ArticulosJSON[]>(REST_SERVER_URL+'/redacciones/search?text='+text)
        return (await getAxiosData(response)).map(Articulo.fromJson)
    }
}


export const articulosService = new ArticulosService()