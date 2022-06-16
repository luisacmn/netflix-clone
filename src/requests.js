const API_KEY = "c87b1919cfb363d7f8b3b8b811a6f3aa";                        

const requests = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
    fetchAction:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchAnimation:`/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchDocumentary:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchDrama:`/discover/movie?api_key=${API_KEY}&with_genres=18`,
    fetchFantasy:`/discover/movie?api_key=${API_KEY}&with_genres=14`,
    fetchHistory:`/discover/movie?api_key=${API_KEY}&with_genres=36`,
    fetchHorror:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchMistery:`/discover/movie?api_key=${API_KEY}&with_genres=9648`,
} 

export default requests;