import axios from 'axios'
import { REST_SERVER_URL } from './configuration'
import { getAxiosData } from "./common";

class AdminService {

    async login(email: string, password: string) {
        return getAxiosData(() =>
            axios.post(`${REST_SERVER_URL}/admin/login`, {
                email,
                password
            })
        )
    }
}

export const adminService = new AdminService()