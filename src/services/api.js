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
              res => res
              
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

    //** ADD PAPER API **//
  static addPaper(data) {
    const TOKEN = getItem("accessToken");
    return axios({
            method: "post",
            url: `${BASE_URL}/api/interests/papers/`,
            headers: {
                "Content-Type": "application/json",
                  Accept: "application/json",
                 'Authorization' :  `Token ${TOKEN}`
          },
            data: data
          }).then(
              res => res
              
            )
        };

        //** GET LIST PAPER API **//
  static getListPaper() {
    const TOKEN = getItem("accessToken");
    return axios({
            method: "get",
            url: `${BASE_URL}/api/interests/papers/`,
            headers: {
                "Content-Type": "application/json",
                 Accept: "application/json",
                'Authorization' :  `Token ${TOKEN}`
          },
          }).then(
              res => res
               )
        };

       //** GET A PAPER API **//
  static getPaper(id) {
    const TOKEN = getItem("accessToken");
    return axios({
            method: "get",
            url: `${BASE_URL}/api/interests/papers/${id}/`,
            headers: {
                "Content-Type": "application/json",
                 Accept: "application/json",
                'Authorization' :  `Token ${TOKEN}`
          },
          }).then(
              res => res
               )
        };
     
        //** DELETE A PAPER API **//
  static deletePaper(id) {
    const TOKEN = getItem("accessToken");
    return axios({
            method: "DELETE",
            url: `${BASE_URL}/api/interests/papers/${id}/`,
            headers: {
                "Content-Type": "application/json",
                 Accept: "application/json",
                'Authorization' :  `Token ${TOKEN}`
          },
          }).then(
              res => res
               )
        };

          //** UPDATE PAPER API **//
  static updatePaper(data,id) {
    const TOKEN = getItem("accessToken");
    // console.log('SKD',data)
    return axios({
            method: "patch",
            url: `${BASE_URL}/api/interests/papers/${id}/`,
            headers: {
                "Content-Type": "application/json",
                  Accept: "application/json",
                 'Authorization' :  `Token ${TOKEN}`
          },
            data: data
          }).then(
              res => res
              
            )
        };
 

          //** GET USER PROFILE DATA API **//
  static getUserData() {
    const TOKEN = getItem("accessToken");
    return axios({
            method: "get",
            url: `${BASE_URL}/api/accounts/profile/`,
            headers: {
                "Content-Type": "application/json",
                  Accept: "application/json",
                 'Authorization' :  `Token ${TOKEN}`
          },
          //   data: data
          }).then(
              res => res
              
            )
        };

            //** UPDATE USER PROFILE API **//
  static updateUserProfile(data,id) {
    const TOKEN = getItem("accessToken");
    // console.log('SKD',data)
    return axios({
            method: "patch",
            url: `${BASE_URL}/api/accounts/profile/`,
            headers: {
                "Content-Type": "application/json",
                  Accept: "application/json",
                 'Authorization' :  `Token ${TOKEN}`
          },
            data: data
          }).then(
              res => res
              
            )
        };

        

            //** GET KEYWORD DATA API **//
  static getKeyword() {
    const TOKEN = getItem("accessToken");
    return axios({
            method: "get",
            url: `${BASE_URL}/api/interests/keywords/`,
            headers: {
                "Content-Type": "application/json",
                  Accept: "application/json",
                 'Authorization' :  `Token ${TOKEN}`
          },
          //   data: data
          }).then(
              res => res
              
            )
        };

          //** ADD KEYWORD DATA API **//
  static addKeyword(data) {
    console.log('DD',data)
    const TOKEN = getItem("accessToken");
    return axios({
            method: "post",
            url: `${BASE_URL}/api/interests/keywords/`,
            headers: {
                "Content-Type": "application/json",
                  Accept: "application/json",
                 'Authorization' :  `Token ${TOKEN}`
          },
            keywords: data
          }).then(
              res => res
              
            )
        };



}

export default user;