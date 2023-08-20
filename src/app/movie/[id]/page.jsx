import Image from "next/image";
import React from "react";

const movie = async ({ params }) => {
  const API_KEY = process.env.API_KEY;
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=sk-SK`
  );
  const movie = await res.json();
  // console.log(movieId);
  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          className="rounded-lg"
          style={{ maxWidth: "100%", height: "100%" }}
          placeholder="blur"
          blurDataURL="/Rolling.svg"
          alt="image is not available"
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.original_title}
          </h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview:</span>
            {movie.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default movie;
