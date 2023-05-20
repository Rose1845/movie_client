import React, { useState, useEffect } from 'react';
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

const Home=()=> {

    const [data, setData] = useState([]);
    const fetchMovies = async () => {
        // const response = await axios.get('/movies');
        const response = await publicAxios.get('/movies');
        setData(response.data);
        console.log(response.data);
    };
    useEffect(() => {
        fetchMovies();
    }, []);
    return (
        <div>
        <h1>
            {data.map((item) => (
            <div key={item.id}>
                <h1 style={{fontSize:'12px'}}>{item.title}</h1>
                <p style={{fontSize:'8px'}}>{item.description}</p>
                <img style={{width:'100px'}} src={item.backdrops[0]} alt="" />
            </div>
            ))}
        </h1>
        </div>
    );
}
export default Home;