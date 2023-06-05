import React from 'react'
import publicAxios from '../api'
import { useParams } from 'react-router-dom'

function SingleMovie() {
    let params=useParams()
    let key = params.imbId
    const [data,setData]= React.useState([])
    const fetchSingleMovie = ()=>{
        const response = publicAxios.get(`/movies/${key}`)
        setData(response.data)
    }
  React.useEffect(()=>{
    fetchSingleMovie
  },[])

  return (
    <div className='max-w-6xl m-auto'>
        {
            data?.map((movie)=>{
                return(
                    <div className="" key={movie.id}>
                        <h2>{movie.title}</h2>
                    </div>
                )
            })
        }
    </div>
  )
}

export default SingleMovie