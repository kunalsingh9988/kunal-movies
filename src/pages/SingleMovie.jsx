import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGolbalContext } from "../context/context";
import { URL } from "../context/context";
import { Link } from "react-router-dom";
const SingleMovie = () => {
  const { isLoading } = useGolbalContext();
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const {
    Awards,
    Title,
    BoxOffice,
    Director,
    Genre,
    Plot,
    Poster,
  
    Year,
    imdbRating,
    imdbVotes,
  } = movie;

  const getMovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setMovie(data);
    console.log(data);
  };

  useEffect(() => {
    getMovies(`${URL}&i=${id}`);
  }, [id]);

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div className="single-movie-page">
      <button className="btn btn-outline-dark back-button">
        <Link to="/" className="back_link">back</Link>
      </button>
      <div className="single-movie-card">
        <div className="image-and-desc">
          <img src={Poster} alt={Title} className="poster-img" />
          <p>
            {" "}
            <b>Title </b> : {Title}
          </p>
          <p>
            <b>Description</b> : {Plot}
          </p>
        </div>
        <div className="other-info">
          <p>
            {" "}
            <b>Awards</b> : {Awards}{" "}
          </p>
          <p>
            {" "}
            <b>Box Office Record</b> : {BoxOffice}{" "}
          </p>
          <p>
            {" "}
            <b>Direcor</b> : {Director}{" "}
          </p>
          <p>
            {" "}
            <b>Genre</b> : {Genre}{" "}
          </p>
          {/* <p>
            {" "}
            <b>Ratings</b> : {Ratings.map((rating,index)=>{
              console.log(index)
              return(
                <div >
                {rating.Value}
                </div>
              )
            })}{" "}
          </p> */}
          
          <p>
            {" "}
            <b>Year</b> : {Year}{" "}
          </p>
          <p>
            {" "}
            <b>IMDB</b> : {imdbRating}{" "}
          </p>
          <p>
            {" "}
            <b>Total Votes</b> : {imdbVotes}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
