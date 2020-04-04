import React from 'react';
import './Countries.css';
import { Button } from 'react-bootstrap'


function Countries({ results, totalCases, totalRecovered, totalDeaths, searchCountry, sortAZ, isAlphabetical, isAsc, sortAsc }) {
  return (
    <div className='countries-container'>
      <div className='countries-content'>
        <h1>Total Cases {totalCases}</h1>
        <h4>Total Recovered {totalRecovered}</h4>
        <h5>Total Deaths {totalDeaths} </h5>
      </div>
      <div className='countries-input'>
        <input
          onChange={(e) => {
            searchCountry(e.target.value)
          }}
          placeholder='Search countries'
        />
      </div>
      <div className='countries-sortButton'>
        <Button variant="outline-info" onClick={sortAZ}>
          {!isAlphabetical ? 'Sort A-Z' : 'Sort Z-A'}
        </Button>
        <Button variant="outline-danger" onClick={sortAsc}>
          {!isAsc ? 'Ascending' : 'Descending'}
        </Button>
      </div>
      <div className='countries-list'>
        <ul className="overflow-auto" id="style-15">
          {results ? results.map((result, index) => (
            <li key={result.attributes.OBJECTID}>{`${index + 1}. ${result.attributes.Country_Region} : ${result.attributes.Confirmed}`}</li>
          )) : <p>Problem loading the data, please refresh after a while.</p>
          }
        </ul>
      </div>
    </div>
  )
}

export default Countries
