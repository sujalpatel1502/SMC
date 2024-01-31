import axios from "axios";

const URL='https://1145-2405-201-201c-8115-1cd6-aa5c-a3e2-e77e.ngrok-free.app'

export const authenticatesignup= async(data)=>{
    console.log("dataaa",data);
    try {
        return await axios.post(`${URL}/signup`,data)
    } catch (error) {
        console.log("error in signup",error);
    }
}

export const authenticatelogin= async(data)=>{
    console.log("logindataaa",data);
    try {
        return await axios.post(`${URL}/login`,data)
    } catch (error) {
        console.log("error in login",error);
        return error.response;
    }
}