// src/components/SearchBar.jsx
import React from 'react';
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css'

const SearchBar = () => {
  return (
    <Paper className='paper'>
        <div>
        <input
        className='search'
        placeholder='Search...'
      />
        
        </div>
<div>
        <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
      </div>
    </Paper>
  );
};

export default SearchBar;
