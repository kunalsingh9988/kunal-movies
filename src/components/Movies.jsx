import React from 'react'
import { useGolbalContext } from "../context/context";
import { Link } from "react-router-dom";

const Movies = () => {
    const { movieData, isLoading } = useGolbalContext();
   
  

    if (isLoading) {
      return <div>loading...</div>;
    }
  
    return (
      <div className="movies-header">
        <h1>Your Movies</h1>
  
        <div className="movie-header-card">
          {movieData.map((movie) => {
            const { imdbID, Poster, Title } = movie;
  
            return (
              <Link className="card-link" to={`/movie/${imdbID}`} key={imdbID}>
                <div className="card ">
                  <img src={Poster} id="cardImg" alt={Title} />
                  <div className="card-body">
                    <h5 className="card-title">{Title.slice(0, 15)}...</h5>
                    <a href='/' className="btn btn-outline-dark " id="info-btn">
                      More info
                    </a>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  
  
}

export default Movies