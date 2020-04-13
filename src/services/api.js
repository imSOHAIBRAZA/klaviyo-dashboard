import { getItem } from "../utils/localStorage";
import { BASE_URL } from "../constants";
import axios from "axios";

class user {

    //** SIGNUP API **//
  static userSignup(data) {
    const TOKEN = getItem("accessToken");
    return axios({
            method: "post",
            url: `${BASE_URL}/api/accounts/register/`,
            data: data
          }).then(
              res => {
                  res.json()
              }
            )
        };

           //** SIGNUP API **//
  static userSignIn(data) {
    
    return axios({
            method: "post",
            url: `${BASE_URL}/api/accounts/login/`,
            data: data
          }).then(
              res => res
              )
            };
     
 



}

export default user;