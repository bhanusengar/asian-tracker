import axios from "axios";

const api = axios.create({
  baseURL:'https://express.digitemtech.com/api',
  headers:{
    'Content-Type':'application/json'
  }
})

export const login = async (data)=>api.post('/login',data);

export const userRegister = async (data)=>api.post('/signup',data);

// get all menu cotegory
export const menuCategory = async ()=>api.get('/category/all');

// get all menu country
export const menuCountry = async ()=>api.get('/country/all');