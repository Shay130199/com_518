import React, { useState } from 'react'
import {FaSearch} from "react-icons/fa"
import './SearchBar.css'

export  const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("")

    const fetchData = (value) => {
        fetch("http://localhost:8800/regions")
        .then((response) => response.json())
        .then((json) =>{
            const results = json.filter((user) => {
                return (
                user &&
                user.region && 
                user.region.toLowerCase().includes(value)
                );
            });
            setResults(results);
        });
    };

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }
  return (
    <div className="input-wrapper">
        <FaSearch id="search-icon"/>
        <input 
        placeholder="Search..." 
        value={input} 
        onChange={(e) => handleChange(e.target.value)} />
    </div>
  );
};

export default SearchBar;


