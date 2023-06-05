import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import movieLoader from "../loaders/movieLoader";
import SingleMovie from "../components/SingleMovie";
import Trailer from "../components/trailer/Trailer";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Home/>
    },
    {
        path:'/movies:imbId',
        
        element: <SingleMovie/>
    },
    {
        path:'/Trailer/:ytTrailerId',
        element:<Trailer/>
    }
])