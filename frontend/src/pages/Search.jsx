import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { MdOutlineSearch } from "react-icons/md";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Postcard from "../components/Postcard";
import { apiStart } from "../../api";

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const queryParam = params.get("query");
    if (queryParam) {
      setQuery(queryParam);
    }
  }, [location.search]);

  useEffect(() => {
    const fetchItems = async () => {
      if (query) {
        console.log(query);
        setLoading(true);
        try {
          const response = await axios.get(
            `${apiStart}/api/recipe/search/${query}`
          );
          setResults(response.data);
        } catch (err) {
          setError(err.message || "Error fetching data");
        } finally {
          setLoading(false);
        }
      }
    };
    fetchItems();
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?query=${query}`);
  };

  return (
    <div>
      <Header />
      <div className="px-6 lg:px-12 py-20">
        <h1 className="text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed">
          Search
        </h1>
        <form
          onSubmit={handleSearch}
          className="bg-white md:max-w-xl mx-auto p-4 rounded relative flex items-center"
        >
          <MdOutlineSearch className="w-5 h-5 mr-2 text-neutral-300" />
          <input
            className="outline-none w-full placeholder:text-[#344f3766]"
            name="query"
            type="search"
            placeholder="Search for a recipe"
            id="search"
            value={query}
            onChange={handleInputChange}
            required
          />
        </form>
      </div>
      {/* <ul className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
        {loading && <li>Loading...</li>}
        {error && <li>{error}</li>}
        {results && results.map((item) => <Card item={item} key={item._id} />)}
      </ul> */}
      <ul className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-[1100px] gap-x-4 gap-y-8 mx-auto">
        {results.map((item) => (
          <Postcard
            imageUrl={item.photo}
            likesCount={item.recipeLikeCount}
            caption={item.name}
            preptime={item.prepTime}
            category={item.category}
            servings={item.servings}
            cooktime={item.cookTime}
            difficulty={item.difficulty}
          />
        ))}
      </ul>
    </div>
  );
};

export default Search;
