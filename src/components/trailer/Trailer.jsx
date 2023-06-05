import { useParams } from "react-router-dom";

import ReactPlayer from "react-player";

import React from 'react'

function Trailer() {
    let params = useParams()
    let key = params.ytTrailerId;
  return (
    <div>
        {
        (key!=null) ?
        <ReactPlayer controls="true" playing={true} url={`https://www.youtube.com/watch?v=${key}`}/>
        :
        null
        }
    </div>
  )
}

export default Trailer