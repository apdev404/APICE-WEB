import axios from 'axios'
import { REST_SERVER_URL } from './configuration' 
import { getAxiosData } from "./common";
import { Solicitud, type SolicitudJSON } from '$lib/domain/solicitud';

class SolicitudService{
    async getSolicitudes(){
        const response = () => axios.get<SolicitudJSON[]>(REST_SERVER_URL + '/admin/solicitudes')
        return (await getAxiosData(response)).map(Solicitud.fromJson)
    }

  
}


export const solicitudService = new SolicitudService()