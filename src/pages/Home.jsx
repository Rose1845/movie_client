import React, { useState, useEffect } from 'react';
import publicAxios from '../api/index';
import { Link } from 'react-router-dom';
import Hero from '../hero/Hero';

const Home=()=> {

    const [data, setData] = useState([]);
    const fetchMovies = async () => {
        // const response = await axios.get('/movies');
        try {
            const response = await publicAxios.get('/movies');
        setData(response.data);
        console.log(response.data);
            
        } catch (error) {
            console.log(error);
        }
        
    };
    // loading
    useEffect(() => {
        fetchMovies();
    }, []);
    // const backgroundImage= data.backdrops[0];
    // console.log(backgroundImage);
    return (
        <div className=''>
         {/* <h1>
            {data.map((item) => (
            <div key={item.id} className={`bg-[url()]`}>
                
                <div>
                <h1 style={{fontSize:'12px'}}>{item.title}</h1>
                <p style={{fontSize:'8px'}}>{item.description}</p>
                <img style={{width:'100px'}} src={item.backdrops[0]} alt="" />
                <video src={item.trailerLink}></video>
                <div className='list-none'>{item.genres.map((gen)=>(
                    <ul className='list-none' key={gen.id}>
                        <li style={{fontSize:'8px'}}>{gen}</li>
                    </ul>
                ))}</div>
               

                </div>
               
                
            </div>
            ))}
        </h1> */}
        <Hero movies={data}/>
        </div>
    );
}
export default Home;