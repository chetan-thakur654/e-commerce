import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)

  const apiUrl = "http://localhost:1337/api";
  // const imgUrl = "http://localhost:1337";
  
  useEffect(() => {
  const apiToken = "4b164aa3168226a200b3f449992743df1f483fc79210c368be8988c1a000e8079ee741e5f63dd034a37cd66e63a469a3f0f64ca2560054aae84cd48b453a52fd75aa4813e562cf2459636055138d9294e6f28b89be3fb3d3cb08e4a8d738ccea2aaa762a04169cdff4013b1d86599ad5b828973d7a394320e6336d256869fc08";
    
    const fetchData = async () => {
      setLoading(true)
      
      try {
        const res = await axios.get(url,{
          headers: {
            Authorization: 'bearer ' + apiToken,
          }
        })
        setProducts(res.data.data)
      } catch(err) {
        setError(true)
      }
      setLoading(false)
    }
    fetchData()
  },[url])

  return {products, loading, error}
  console.log(products)
};

export default useFetch;

