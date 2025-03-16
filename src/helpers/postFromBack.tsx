import axios from 'axios';

export class postBack {
    private backUrl: string;
    constructor() {
        this.backUrl = import.meta.env.VITE_BACK_URL;
    }

    auth = async (email: string, password: string) => {
        try {
            const body = {
                email: email,
                password: password
            }
            const auth = await axios.post(`${this.backUrl}/user/auth`, body);
            if (auth.data.success) {
                return auth.data;
            }
            throw new Error('No se pudo obtener los productos');
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    createUser = async (name: string, email: string, password: string, category: string) => {
        try {

            const body = {
                name,
                password,
                email,
                categoryDiscount: category
            }
            const products = await axios.post(`${this.backUrl}/user/register`, body);
            if (products.data.success) {
                return products.data;
            }
        } catch (error) {
            console.log(error);
            return error;
        }
    }


}