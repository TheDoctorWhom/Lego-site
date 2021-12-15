import React, { useState } from 'react';
import './SearchBar.css';
import Dropdown from './Dropdown.js';

const options = [{
        label: 'Title',
        value: 'TITLE'
    },
    {
        label: 'Number',
        value: 'NUMBER'
    },
    {
        label: 'Theme',
        value: 'THEME'
    }
];


const SearchBar = ({ onFormSubmit }) => {

    const [term, setTerm] = useState('');
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const onSubmit = (event) => {
        event.preventDefault();

        onFormSubmit(term, selectedOption.value);

    };

    // const onValueChange = ( option ) =>{
    //   setSelectedOption(option);
    // };

    return (

        <div className="search-bar ui segment">
        <form onSubmit={onSubmit} className="ui form">
        <label>Search for Lego Set</label>
          <div className="two fields">
            <Dropdown
            className="ui field"
            options={options}
            selected={selectedOption}
            onSelectedChange={setSelectedOption}
          />
            <div className="search-bar ui field">
              <input
                className='search-bar-text'
                type="text"
                value={term}
                onChange={(event) => setTerm(event.target.value)}
              />
            </div>
            <input className="btn btn-default ui submit-btn" value ='Search' type="submit" />
        </div>
        </form>
      </div>
    );

};



export default SearchBar;
