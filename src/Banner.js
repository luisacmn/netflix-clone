import React, { useEffect, useState } from "react"
import axios from "./axios"
import requests from "./requests";
import "./Banner.css";

const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)                                 //o requests é a baseURL e o fetchNetflixOriginals o endpoint. Vai armazenar no array "request" todos os dados obtidos com o fetch nesse para essa url completa.
            setMovie( request.data.results[Math.floor(Math.random() * request.data.results.length - 1)] )   //request.data.results é o acesso ao objeto com os filmes. length -1 é o comprimento desse array de objetos. 
            return request;
        }
        fetchData();
    },[]);

    const str = movie.overview;                     //atribuir a string obtida à uma variável
    console.log(str)

    const result = str ? str.length : 0;            //verificar se é uma string. Se for, dizer o comprimento. Se não, retornar 0.
    console.log(result); 

    return (
        <header className="banner"                  //aplicar o estilo no JS para poder inserir a variável "movie" como o background
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
                backgroundPosition: "center center"
            }}
            > 
            <div className="banner-content">
                <h1 className="banner-title">{movie.title || movie.name || movie.original_name}</h1>
                <div className="banner-buttons">
                    <button className="banner-button">Play</button>
                    <button className="banner-button">My List</button>
                </div>
                <h1 className="banner-description">{result < 150 ? str : str.substring(0, 149) + " ..."}</h1> 
            </div>
            <div className="banner-fadeBottom"></div>
        </header>
    )
}

export default Banner;

