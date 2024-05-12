import axios from "axios";

const apiRequest = axios.create({
    baseURL:"https://fakestoreapi.com/",
    headers:{
        "Content-Type":"application/json",
        Auth:"Bearer Token"
    }
})

export default apiRequest