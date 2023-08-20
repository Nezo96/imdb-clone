import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ result }) => {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          style={{ maxWidth: "100%", height: "auto" }}
          placeholder="blur"
          blurDataURL="/Rolling.svg"
          alt="image is not available"
        />
        <div className="p-2">
          <p className="line-clamp-2 tex-md">{result.overview}</p>
          <h2 className="truncate text-lg font-bold">
            {result.title || result.original_title}
          </h2>
          <span>{result.release_date}</span>
        </div>
      </Link>
    </div>
  );
};

export default Card;
