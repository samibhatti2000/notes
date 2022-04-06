import {} from '../constant/contacConstant';
import { get_One_Product, get_product } from '../constant/productConstant';

export const productReducer = ( state = { product:[]}, {type, payload} )=>{
    switch (type) {
        case get_product:
        case get_One_Product:
            return{
                ...state,
                product: payload,
                loading: false,
            }
        default:
            return state;
    }


}

export const productOneReducer = ( state = { product:[]}, {type, payload} )=>{
    switch (type) {
        case get_One_Product:
            return{
                ...state,
                product: payload,
                loading: false,
            }
        default:
            return state;
    }


}