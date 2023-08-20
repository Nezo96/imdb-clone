import Results from "@/components/Results";
import React from "react";

const Home = async ({ searchParams }) => {
  const API_KEY = process.env.API_KEY;
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=sk-SK&page=1`,
    { next: { revalidate: 10 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const result = data.results;
  console.log(result);
  return (
    <div>
      <Results results={result} />
    </div>
  );
};

export default Home;
