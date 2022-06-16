import React, { useEffect, useState } from "react"
import axios from "./axios"
import "./Row.css"
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"

const base_url = "https://image.tmdb.org/t/p/original"

const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("")
    
    /*---------------------------------------------------------------Request Data from the API*/
    useEffect(()=>{
        async function fetchData () { 
            const request = await axios.get(fetchUrl);
            console.log(request.data.results)
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    },[fetchUrl])               
    
    
    const opts = {
        height: "390", 
        width: "100%", 
        playerVars: {
            autoplay: 1
        }
    }
    
    /*--------------------------------------------------Solicitar o trailer ao Youtube com o módulo npm movieTrailer*/
    const handleClick = (movie) =>{
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie.name || "")
            .then((url) => {
                //http://www.youtube.com/watch?v=XS58S5X47  -  O video id é o "XS58S5X47"
                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get("v"))
            })
            .catch((error) => console.log(error))
        }
        console.log(trailerUrl)
    }

    return (
        <div className="row">
            <h2 className="row-title">{title}</h2>

            <div className="row-posters">
                {movies.map(movie => (
                    <img className={`row-poster ${isLargeRow && "row-poster-large"}`} src={`${base_url}${isLargeRow? movie.poster_path : movie.backdrop_path}`} alt={movie.name} key={movie.id} onClick={() => handleClick(movie)}/>
                ))}
            </div>

            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row;