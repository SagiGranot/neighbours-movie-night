import React from 'react';
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
    
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilters({
            Title: event.target.value,
            page: 0
        })
    }
    
    return (
        <div className="search-bar">
            <TextField
                name="movies-search"
                className="search-input"
                label="Type movie name..."
                variant="outlined"
                onChange={onChange}
                size="small"
            />
            <SearchButton className="search-btn" variant="contained">Search</SearchButton>
      </div>
    );
}

export default SearchMovies;