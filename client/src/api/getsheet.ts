import axios from 'axios';
import Sheet from "../interface/sheet";

export abstract class sheetApi {
    private static sheetAxios = axios.create();

    static async findMany(): Promise<Sheet[]> {
        const url = 'http://localhost:3000/sheet';
        const response = await this.sheetAxios.get(url);
        console.log(response.data)
        return response.data
    }
}
