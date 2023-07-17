import React, { useContext, useEffect, useState } from "react";
// import Loading from "../pages/Loading";

export const URL = `http://www.omdbapi.com/?apikey=69f6105f`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [movieName, setMovieName] = useState("titanic");
  const [movieData, setMovieData] = useState([]);
  const [isError, setIsError] = useState({ show: false, msg: "" });
  const[isLoading,setIsLoading] = useState(false)



  const getMovies = async (url) => {
    setIsLoading(true)
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === "True") {
        setIsLoading(false)
        setMovieData(data.Search);
        console.log(data);
        setIsError({
          show:false,
          msg:""
        })
      }else{
        setIsError({
          show:true,
          msg:data.Error
        })
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies(`${URL}&s=${movieName}`);
  }, [movieName]);

  return (
    <AppContext.Provider
      value={{
        movieName,
        setMovieName,
        movieData,
        isError,
        isLoading
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGolbalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGolbalContext };

// key:69f6105f

// const url ="http://www.omdbapi.com/?s=avatar&apikey=69f6105f&"
