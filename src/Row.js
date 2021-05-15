import React, { useEffect, useState } from 'react'
import axios from './axios';
import './Row.css';

const Row = ({title,fetchUrl,isLargeRow = false}) => {
    const [movies, setMovie] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original";

    useEffect(()=> {
        async function fetchData(){
        const request = await axios.get(fetchUrl);
        setMovie(request.data.results);
        return request;
        }
        fetchData();

    },[fetchUrl]) // whenever pulling data outside we need add the dependencies 
    console.log(movies);


    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
            {
                movies?.map((Movie)=> 
                   ((isLargeRow  && Movie.poster_path) || 
                    (!isLargeRow && Movie.backdrop_path)) && (
                        <img
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    key={Movie.id}
                    src={`${base_url}${
                        isLargeRow ? Movie?.poster_path : Movie?.backdrop_path
                    }`} 
                    alt={Movie?.name}
                />
                ) 
            )}
            </div>
        </div>
    )
}

export default Row
