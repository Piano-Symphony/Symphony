import axios from 'axios';
import Allsheet from "../interface/sheet";

export abstract class sheetApi {
    private static sheetAxios = axios.create();

    static async getAllsheets(): Promise<Allsheet[]> {
        const url = 'http://localhost:3000/sheet';
        const response = await this.sheetAxios.get(url);
        console.log(response.data)
        return response.data
    }
}
