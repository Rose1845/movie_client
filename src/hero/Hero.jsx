import React, { useState, useEffect } from 'react';
import publicAxios from '../api/index';
import { Link } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
const Hero=({movies})=> {

    
    return (
        <div>
            <Carousel>
                {
                    movies?.map((movie)=>{
                        return(
                            <Paper key={movie.id}>
                                <div className="container ">
                                    <div className="h-[550px] bg-cover bg-no-repeat w-[100%] bg-gradient-to-b from-neutral-800 to-neutral-900" style={{backgroundImage:`url(${movie.backdrops[0]})`}}>
                                        <div className="flex items-center   justify-evenly ">
                                            <div className="h-[300px] top-[200px] border  border-indigo-300">
                                                <img className='h-[100%] w-[100%]'src={movie.poster} alt="" />
                                            </div>
                                            <div className="flex items-center">
                                                <h3 className='text-2xl text-white'>{movie.title}</h3>
                                            </div>
                                            <div className="play-button">
                                                <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                                <Fa className='text-3xl text-white'size='24px' icon={faCirclePlay}/>
                                                </Link>
                                                
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </div>
      
    )
}
export default Hero