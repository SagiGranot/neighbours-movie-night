import React, { useState } from 'react';
import { useStoreActions } from '../data/hooks';
import { Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import './SearchMovies.css';

const SearchButton = styled(Button)({
    textTransform: 'none',
    marginLeft: '5px'
});

const SearchMovies = () => {
    const { setFilters } = useStoreActions((actions) => actions.movies);
    const [ title, setTitle ] = useState('')
    
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            setFilters({ Title: title, page: 0});
        }
    }
    
    return (
        <div className="search-bar">
            <TextField
                name="movies-search"
                className="search-input"
                label="Type movie name..."
                variant="outlined"
                onChange={onChange}
                onKeyDown={handleKeyPress}
                size="small"
            />
            <SearchButton
                className="search-btn"
                variant="contained"
                onClick={() => setFilters({ Title: title, page: 0})}
            >
                Search
            </SearchButton>
      </div>
    );
}

export default SearchMovies;