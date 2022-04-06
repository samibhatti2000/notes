import {get_contact} from '../constant/contacConstant';


export const contactReducer = (state={allQuries:[]},{type, payload})=>{
        switch (type) {
            case get_contact:
                return{
                    ...state,
                    allQuries: payload,
                    loading: false,
                }
            default:
                return state;
        }
}

