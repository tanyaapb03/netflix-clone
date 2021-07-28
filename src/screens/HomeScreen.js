import React from 'react';
import "./HomeScreen.css";
import Nav from '../Nav';
import Banner from '../Banner';
import requests from '../Request';
import Row from '../Row';






function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav/>
            <Banner/>
            
          <Row
          title='Trending Now'
          fetchUrl={requests.fetchTrending}
          isLargeRow/>
          <Row
          title='Netflix Original'
          fetchUrl={requests.fetchNetflixOriginals}/>
          <Row
          title='Romantic Movies'
          fetchUrl={requests.fetchRomanceMovies}/>
          <Row
          title='Horror Movies'
          fetchUrl={requests.fetchHorrorMovies}/>
          <Row
          title='Comedy Movies'
          fetchUrl={requests.fetchComedyMovies}/>
          <Row
          title='Documentaries'
          fetchUrl={requests.fetchDocumentaries}/>


        </div>
    )
}

export default HomeScreen;
