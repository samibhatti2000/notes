import { login_user } from "../constant/userConstant";

export const userLoginAction = (data) => {
  return {
    type: login_user,
    payload: data,
  };
};
