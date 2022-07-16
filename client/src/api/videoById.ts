import axios from 'axios';
import Sheet from "../interface/sheet";

export abstract class videoApi {
    private static sheetAxios = axios.create();

    static async findUnique(): Promise<Sheet[]> {
        const url = 'http://localhost:3000/sheet/:id';
        const response = await this.sheetAxios.get(url);
        console.log(response.data)
        return response.data
    }
}