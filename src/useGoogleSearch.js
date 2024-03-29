import { useEffect, useState } from 'react';
import API_KEY from "./keys";
const CONTENT_KEY = "a3e2de5fec41bbd18";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async() => {

      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTENT_KEY}&q={term}`
      )

      .then(response => response.json())
      .then(result => {
        setData(result)
      })
    }
      
    fetchData();

  }, [term])

  return { data }
};

export default useGoogleSearch;
