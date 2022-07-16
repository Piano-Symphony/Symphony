import axios from 'axios';
import Sheet from "../interface/sheet";

export abstract class searchApi {
    private static searchAxios = axios.create();

    static async findMany(term:any): Promise<Sheet[]> {
        const url = `http://localhost:3000/${term}`;
        const response = await this.searchAxios.get(url);
        console.log(response.data)
        return response.data
    }
}
