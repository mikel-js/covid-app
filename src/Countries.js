import React from 'react';
import './Countries.css';
import { Button } from 'react-bootstrap'


function Countries({ stats, totalCases, totalRecovered, totalDeaths, sortAZ, isAlphabetical, isAsc, sortAsc }) {
  return (
    <div className='countries-container'>
      <h1>Total Cases {totalCases}</h1>
      <h4>Total Recovered {totalRecovered}</h4>
      <h5>Total Deaths {totalDeaths} </h5>
      <Button variant="outline-info" onClick={sortAZ}>
        {!isAlphabetical ? 'Sort A-Z' : 'Sort Z-A'}
      </Button>
      <Button variant="outline-danger" onClick={sortAsc}>
        {!isAsc ? 'Ascending' : 'Descending'}
      </Button>
      <ul className="overflow-auto" id="style-15">
        {stats ? stats.map((stat) => (
          <li key={stat.attributes.OBJECTID}>{`${stat.attributes.Country_Region} : ${stat.attributes.Confirmed}`}</li>
        )) : <p>Problem loading the data, please refresh after a while.</p>
        }
      </ul>
    </div>
  )
}

export default Countries

