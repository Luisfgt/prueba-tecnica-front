import axios from 'axios';

export class getFromBack {
    private backUrl: string;
    constructor() {
        this.backUrl = import.meta.env.VITE_BACK_URL;
    }

    getProducts = async () => {
        try {
            const products = await axios.get(`${this.backUrl}/articulos`);
            if (products.data.success) {
                return products.data.data;
            }
            throw new Error('No se pudo obtener los productos');
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    
}