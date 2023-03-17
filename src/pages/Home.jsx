import React, { useState, useEffect } from 'react';
import axios from '../api';
const Home=()=> {

    const [data, setData] = useState([]);
    const fetchMovies = async () => {
        const response = await axios.get('');
        setData(response.data);
    };
    useEffect(() => {
        fetchMovies();
    }, []);
    return (
        <div>
        <h1>
            {data.map((item) => (
            <div key={item.id}>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <img src={item.backdrops} alt="" />
            </div>
            ))}
        </h1>
        </div>
    );
    }
    export default Home;