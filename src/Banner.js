import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from './axios';
import Request from './Request';

const Banner = () => {
    //to fetch the data from request 
    const[movie, setMovie] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            const req = await axios.get(Request.fetchNetflixOriginals);
            setMovie(
                req.data.results[
                    Math.floor(Math.random() * req.data.results.length-1)  //getting random image from Request Object
                ]  
            )
            return req;
        }
        fetchData();
    },[]);
    console.log(movie);


    // to truncate the text we are using this function
    const TextDescTruncate = (string,n) => {
            return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }
    return (
        <header className="banner" style={{
            backgroundSize : "cover",
            backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition : "center center",
        }}>

        <div className="banner__content">
        <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
        </div>
        <h1 className="banner_description">
        {
            TextDescTruncate(movie?.overview,150)
        }
        </h1>
        </div>
        
        <div className ="banner--fadeBottom"></div>
        </header>
    )
}

export default Banner
