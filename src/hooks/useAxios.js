import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (url) => {
    const [responses, setResponses] = useState(null);
    //const [err, setErr] = useState(null);

    const fetchData = async () => {
        const res = await axios.get(url)
        setResponses(res.data)
    }

    return [responses, fetchData]
}

export default useAxios;



//Solution


// function useAxios(keyInLS, baseUrl) {
//     const [responses, setResponses] = useLocalStorage(keyInLS);
  
//     const addResponseData = async (formatter = data => data, restOfUrl = "") => {
//       const response = await axios.get(`${baseUrl}${restOfUrl}`);
//       setResponses(data => [...data, formatter(response.data)]);
//     };
  
//     const clearResponses = () => setResponses([]);
  
//     return [responses, addResponseData, clearResponses];
//   }
  
//   function useLocalStorage(key, initialValue = []) {
//     if (localStorage.getItem(key)) {
//       initialValue = JSON.parse(localStorage.getItem(key));
//     }
//     const [value, setValue] = useState(initialValue);
  
//     useEffect(() => {
//       localStorage.setItem(key, JSON.stringify(value));
//     }, [value, key]);
  
//     return [value, setValue];
//   }
  
//   export default useLocalStorage;
  