import React from "react"
import "./App.css"
import Row from "./Row"
import requests from "./requests"
import Banner from "./Banner"
import Navbar from "./Navbar"
import Footer from "./Footer"

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action" fetchUrl={requests.fetchAction}/>
      <Row title="Animation" fetchUrl={requests.fetchAnimation}/>
      <Row title="Documentary" fetchUrl={requests.fetchDocumentary}/>
      <Row title="Drama" fetchUrl={requests.fetchDrama}/>
      <Row title="Fantasy" fetchUrl={requests.fetchFantasy}/>
      <Row title="History" fetchUrl={requests.fetchHistory}/>
      <Row title="Horror" fetchUrl={requests.fetchHorror}/>
      <Row title="Mistery" fetchUrl={requests.fetchMistery}/>
      <Footer/>
    </div>
  )
}

export default App;