import React from 'react';
import { useNavigate, Link ,Redirect, Navigate } from "react-router-dom";
import {useEffect, useState} from 'react'
import axios from 'axios'
import '../css/detail.css'

function Detail  ()  {

    let query = new URLSearchParams(window.location.search)
    let movieID = query.get('movieID')

    const [movie, setMovie] = useState(null)

    useEffect(() => {

        const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=fc3574b333081974e005569591e1ac8c&language=en-EN`
        axios.get(endPoint).then(response=>{
            const movieData = response.data
            console.log(movieData)
            setMovie(movieData)
        })
        .catch(error => {
           console.log(error)
        })
    }, [movieID]);


    return (
        <div className='contenedor-detail'>
        <>
        {movie &&  
        <>        
        
        <div className='row d-flex justify-content-center mt-5  '>
            <div className="col-3 border border-primary">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="w-100" alt="movie poster" />
            </div>
            <div className="col-4 text-white text-center border border-primary">  
            <h4 className="text-center mt-2">{movie.title}</h4>            
                <h5>Release date : {movie.release_date}</h5>
               
                <p>{movie.overview}</p>
                <h5>Rating: {movie.vote_average}</h5>
                <h5>Genres:</h5>
                <ul>
                {movie.genres.map(oneGenre =>  <li key={oneGenre.id}>-{oneGenre.name}</li>)}
                </ul>
                <Link to={`/tickets?ticket=${movie.id}`} className="btn btn-primary d-grid gap-2 p-2">BUY TICKETS</Link>               
            </div>        
        </div>

        </>
         }     
        </>
         </div> 
    );
}

export default Detail;
