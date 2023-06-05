
import React from 'react'
import publicAxios from "../api";

export default function movieLoader({params}){

    const imbId=params.imbId;
    const fetchSingleMovie = publicAxios.get(`/movies/${imbId}`)
    return fetchSingleMovie();

}