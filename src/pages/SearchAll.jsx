import React, { useState } from 'react'
import './SearchAll' 
import SearchBar  from './SearchBar'
import SearchResultsList from './SearchResultsList';
import './Title.css'
import {Link} from "react-router-dom"
import Mapping from './Mapping';

 function SearchAll() {
    const [results, setResults] = useState([]);
  return (
    <div className='Title'>
      <h1>Welcome to POI</h1>
      <h3>Pick From Over 150 Trips, Find the Adventure of a Lifetime or Volunteer Abroad.</h3>
        <div className="SearchAll">
        <div className="search-bar-container">
                <SearchBar setResults={setResults}/>
                <SearchResultsList results={results}/>
                <Link to="/Page2">
                <input type="button" value="Add New POI"/>
                <Link to="/Page3">
                <input type="button" value="Update"/>
            </Link>
            </Link>
        </div>
        <Mapping/>
      </div>
    </div>
  )
}




export default SearchAll;