import React from "react";
import './searchinputform.styles.css';


const searchInputForm= ({ darkTheme}) => {
    return (
        <div className={ `search-input-form-container ${ darkTheme ? 'dark-box-shadow' : 'light-box-shadow' }` }>
       <input type="text" className="search-input"  placeholder="Search Books"  />
       <button className="search-button">Search</button>
       </div>
    )
}

export default searchInputForm;