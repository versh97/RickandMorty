import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import './Nav.css';

class Nav extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <SearchBar onSearch={this.props.onSearch}/>
                <Link to="/about"><h3>About</h3></Link>
                <Link to="/home"><h3>Home</h3></Link>
                <Link to="/favorites"><h3>Favorites</h3></Link>
                <Link to='/'>LogOut</Link>
            </div>
        )
    }
 

}
export default  Nav;