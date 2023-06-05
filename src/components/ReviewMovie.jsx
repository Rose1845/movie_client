import { useParams } from "react-router-dom";
import publicAxios from "../api";

const ReviewMovie = ({ movie }) => {
   
        let params=useParams()
        const movieId= params.movieId;
    const getSingleMovie=async()=>{
        try {
            const response = await publicAxios.get(`/movies/${movieId}`)
        } catch (error) {
            
        }
    }
    return (
        <div className="single-movie">
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
        <div className="single-movie-info">
           
            <form action="">
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <div>
                    <button className="px-3 py-2 bg-sky-500">Submit</button>
                </div>
            </form>
        </div>
        </div>
    );
    }