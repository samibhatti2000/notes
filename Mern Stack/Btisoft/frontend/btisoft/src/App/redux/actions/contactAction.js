import axios from 'axios';
import {get_contact} from '../constant/contacConstant';


export const getContact = (data)=>{
    return{
        type: get_contact,
        loading:false,
        payload: data
    };
};





  