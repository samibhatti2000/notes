import { get_One_Product, get_product } from '../constant/productConstant';

export const getProduct = (data)=> {
    return{
        type: get_product,
        loading:false,
        payload: data
    };

}
export const getOneProduct = (data)=> {
    return{
        type: get_One_Product,
        loading:false,
        payload: data
    };

}

