import axios from 'axios';
// import publicAxios from '../api/index';
const BASE_URL="http://localhost:8080/api/v1";
const  publicAxios = axios.create({
    baseURL:BASE_URL,
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    }
  });
export default publicAxios;