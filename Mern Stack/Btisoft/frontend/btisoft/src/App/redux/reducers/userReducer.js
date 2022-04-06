import { login_user } from "../constant/userConstant";


export const userReducer = (state={user:{}},{type,payload}) => {
    switch (type) {
        case login_user:
            return{
                ...state,
                user: payload,
                loading: false,
            }
        default:
            return state;
    }
}
