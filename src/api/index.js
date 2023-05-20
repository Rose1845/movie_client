import axios from "axios";

// const BaseUrl="http://localhost:8080/api/v1";

// export default publicAxios.create({
//     baseURL: BaseUrl,
    // headers: {
    //     "Content-type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",

    // }
// });

const BASE_URL="http://localhost:8080/api/v1";
// export default axios.create({
//     baseURL: BaseUrl,
//     headers: {
//         "Content-type": "application/json",
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//     }
// });
export const  publicAxios = axios.create({
    baseURL:BASE_URL,
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",

    }
  });