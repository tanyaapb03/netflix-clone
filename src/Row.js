import React, {useEffect, useState } from 'react'
import requests from './Request';
import "./Row.css"
import axios from './axios'







function Row({title,fetchUrl,isLargeRow=false}) {
    
    
    const base_url="https://image.tmdb.org/t/p/original/";
    const video_url="https://video.tmdb.org/t/p/original/"





    const[movies,setMovies]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request= await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;

        }
        fetchData();
    },[fetchUrl]);
    
    
    return (
        <div className="row">
            
            <h2>{title}</h2>
            <div className="row_posters">
            {movies.map((movie)=>((isLargeRow && movie.poster_path)||(!isLargeRow && movie.backdrop_path))&&(
                <img 
                className={`row_poster ${isLargeRow &&"row_posterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}/>

            ))} 
            {/* <video className={`row_poster ${isLargeRow &&"row_posterLarge"}`}
                key={movie.id}
                src={`${video_url}${
                    isLargeRow ? movie.video:movie.video}`}
                    alt={movie.name}/> */}

                
        </div>
        </div>
    )
}

export default Row;
