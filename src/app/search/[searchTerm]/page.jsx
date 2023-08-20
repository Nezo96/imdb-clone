import Results from "@/components/Results";
import React from "react";

const page = async ({ params }) => {
  const API_KEY = process.env.API_KEY;
  const searchTerm = params.searchTerm;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=${API_KEY}&language=sk-SK&include_adult=false`
  );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  const data = await res.json();
  const results = data.results;
  // console.log(results);
  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}
      {results && <Results results={results} />}
    </div>
  );
};

export default page;
