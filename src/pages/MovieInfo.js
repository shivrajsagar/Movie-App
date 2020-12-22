import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";
import poster from "../images/poster.png";

const API_KEY = "ebb9d8d33069e66b288614ca42d87ad4";

const Poster = `https://image.tmdb.org/t/p/w200`;

const MovieInfo = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await api.get(`/3/movie/${id}?api_key=${API_KEY}`);
      setMovie(response.data);
    };
    fetchMovie();
  });

  return (
    <div className="md:flex bg-gray-100 rounded-xl p-8 md:p-0 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 space-y-7">
      <img
        className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
        src={movie.poster_path === null ? poster : Poster + movie.poster_path}
        alt={movie.title}
      />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <h1>MovieInfo-{id}</h1>
        <p className="text-lg font-semibold">{movie.original_title}</p>
        <p className="font-medium">{movie.overview}</p>
        <p className="text-white">Popularity</p>
        <p>{movie.popularity}</p>
      </div>
    </div>
  );
};

export default MovieInfo;
