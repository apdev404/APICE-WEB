import axios from 'axios'
import { REST_SERVER_URL } from './configuration' 
import { getAxiosData } from "./common";
import { type CategoriasJSON, Categoria } from '$lib/domain/categorias';

class CategoriasService{
    async getCategorias(){
        const response = () => axios.get<CategoriasJSON[]>(REST_SERVER_URL + '/categorias')
        return (await getAxiosData(response)).map(Categoria.fromJson)
    }


    async getCategoriasById(text: string){
        const response = ()=> axios.get<CategoriasJSON>(REST_SERVER_URL+'/categorias/search?text='+text)
        const categoriaJSON = await getAxiosData(response)
        return Categoria.fromJson(categoriaJSON)
    }
}


export const categoriasService = new CategoriasService()