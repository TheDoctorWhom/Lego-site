import React, { useState }from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState('netflix');
  const [selectedType, setSelectedType] = useState('series');
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term, selectedOption, selectedType, selectedLanguage);
  };

  const onValueChange = ( option ) =>{
    setSelectedOption(option);
  };


  return (
      <div className="search-bar ui segment">
        <form onSubmit={onSubmit} className="ui form">
          <div className="field">
            <label>Search</label>
            <input
              type="text"
              value={term}
              onChange={(event) => setTerm(event.target.value)}
            />
          </div>

        <button className="btn btn-default" type="submit">
          Submit
        </button>
        </form>
      </div>
    );

};



export default SearchBar;
