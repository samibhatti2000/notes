import axios from "axios";
import { getContact } from "../actions/contactAction";

export const fetchContact = async (dispatch) => {
  const req = await axios
    .get("https://btisoft.herokuapp.com/api/v1/contact")
    .catch((error) => {
      console.log(error);
    });
  const data = req.data.allQuries;
  dispatch(getContact(data));
};
