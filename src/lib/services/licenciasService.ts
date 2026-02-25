import axios from 'axios'
import { REST_SERVER_URL } from './configuration' 
import { getAxiosData } from "./common";
import { Licencia, type LicenciaJSON } from '$lib/domain/licencia';

class LicenciasService{
    async getLicencias(){
        const response = () => axios.get<LicenciaJSON[]>(REST_SERVER_URL + '/admin/membresias')
        return (await getAxiosData(response)).map(Licencia.fromJson)
    }
}


export const licenciasService = new LicenciasService()