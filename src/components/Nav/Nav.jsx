import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Nav.css';

const Nav = ({onSearch}) => {
     return(
        <div>
            <SearchBar onSearch={onSearch}/>
        </div>
     )
}

export default  Nav;