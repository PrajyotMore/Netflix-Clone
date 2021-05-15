import React from 'react'
import Banner from './Banner'
import Nav from './Nav'
import Request from './Request';
import Row from './Row';

const HomeScreen = () => {
    return (
        <div className="homeScreen">
             {/* Navbar */}
            <Nav/>

            {/* Banner */}
            <Banner/>

            
            <Row
                title='NETFLIX ORIGINALS'
                fetchUrl = {Request.fetchNetflixOriginals}
                isLargeRow
            />
             <Row title='Trending Now' fetchUrl = {Request.fetchNetflixOriginals}/>
             <Row title='Top Rated' fetchUrl = {Request.fetchNetflixOriginals}/>
             <Row title='Action Movie' fetchUrl = {Request.fetchActionMovies}/>
             <Row title='Comedy Movies' fetchUrl = {Request.fetchComedyMovies}/>
             <Row title='Horror Movies' fetchUrl = {Request.fetchHorrorMovies}/>
             <Row title='Romance Movies' fetchUrl = {Request.fetchRomanceMovies}/>
             <Row title='Documentaries' fetchUrl = {Request.fetchDocumentaries}/>
        </div>    
    )
}

export default HomeScreen;
