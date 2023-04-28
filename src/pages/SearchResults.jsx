import React from 'react'
import "./SearchResults.css"


export const SearchResults = ({result}) => {
  return <div className="search-result" 
  onClick={(e) => alert(`You Clicked On ${result.name}`)}> {result.name} 
  </div>
};

