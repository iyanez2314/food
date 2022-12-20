import React, { useEffect, useState } from "react";
import Yelp from "../api/Yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const searchApi = async (searchTerm) => {
    console.log("hi");
    try {
      const response = await Yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san antonio",
        },
      });
      const data = response.data.businesses;
      setResults(data);
    } catch (err) {
      setError("Something went");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [results, error, searchApi];
};
