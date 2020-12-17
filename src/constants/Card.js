import React from "react";

const Poster = `https://image.tmdb.org/t/p/w200`;

const Card = ({ movie }) => {
  return (
    <div className="w-52 h-auto rounded border-2 border-red-500">
      <div className="bg-gradient-to-tl">
        <img   src={Poster + movie.poster_path} alt={movie.title} />
        </div>
      <h1>{movie.title}</h1>
      <h1 class="px-2 text-sm"> {movie.vote_average}</h1>
    </div>
  );
};

export default Card;
