import axios from 'axios'
import { REST_SERVER_URL } from './configuration' 
import { getAxiosData } from "./common";
import { Capacitacion, CapacitacionDetalle, type CapacitacionJSON, type CapacitacionDetalleJSON } from '$lib/domain/capacitacion';
import type { CapacitacionSearchParams } from '$lib/domain/search/CapaSearchParams';

class CapacitacionesService{
    async getCapacitacionesLibres(){
        const response = () => axios.get<CapacitacionJSON[]>(REST_SERVER_URL + '/capacitaciones/libres')
        return (await getAxiosData(response)).map(Capacitacion.fromJson)
    }

    async getCapacitacionesMiembros(){
        const response = () => axios.get<CapacitacionJSON[]>(REST_SERVER_URL + '/capacitaciones/miembros')
        return (await getAxiosData(response)).map(Capacitacion.fromJson)
    }


    async getCapacitacionesByText(filtros: Partial<CapacitacionSearchParams>): Promise<Capacitacion[]> {
        const params = new URLSearchParams();

        if (filtros.text) params.append('text', filtros.text);
        if (filtros.categoriaId) params.append('categoriaId', filtros.categoriaId);
        if (filtros.modalidad) params.append('modalidad', filtros.modalidad);
        if (filtros.order) params.append('order', filtros.order);
        
        if (filtros.soloLibres !== undefined) {
            params.append('soloLibres', String(filtros.soloLibres));
        }

        const url = `${REST_SERVER_URL}/capacitaciones/search?${params.toString()}`;
        const response = () => axios.get<CapacitacionJSON[]>(url);
        
        const data = await getAxiosData(response);
        return data.map((json: CapacitacionJSON) => Capacitacion.fromJson(json));
    }
    

    async getCapacitacionessById(text: string){
        const response = ()=> axios.get<CapacitacionDetalleJSON>(REST_SERVER_URL+'/capacitaciones/'+text)
        const capacitacionDetalleJSON = await getAxiosData(response)
        return CapacitacionDetalle.fromJson(capacitacionDetalleJSON)
    }
}

export const capacitacionesService = new CapacitacionesService()