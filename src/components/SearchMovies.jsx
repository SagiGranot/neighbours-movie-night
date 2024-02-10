import React from 'react';
import { useStoreActions } from 'easy-peasy';
import { Button, TextField } from '@mui/material';
import './SearchMovies.css';

const SearchMovies = () => {
    const { fetch } = useStoreActions((actions) => actions.movies);
    
    const onChange = (event) => {
        fetch({Title: event.target.value});
    }
    
    return (
        <div className="search-bar">
            <TextField
                id="movies-search"
                className="search-input"
                label="Type movie name..."
                variant="outlined"
                onChange={onChange}
                size="small"
            />
            <Button className="search-btn" variant="contained">Search</Button>
      </div>
    );
}

export default SearchMovies;