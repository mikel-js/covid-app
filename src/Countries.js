import React from 'react';
import './Countries.css';
import { Button } from 'react-bootstrap'


function Countries({ stats, totalCases, totalDeaths, sortAZ, isAlphabetical, isAsc, sortAsc }) {
  return (
    <div>
      <h1>Total Cases {totalCases}</h1>
      <h4>Total Deaths {totalDeaths} </h4>
      <Button variant="outline-info" onClick={sortAZ}>
        {!isAlphabetical ? 'Sort A-Z' : 'Sort Z-A'}
      </Button>
      <Button variant="outline-danger" onClick={sortAsc}>
        {!isAsc ? 'Ascending' : 'Descending'}
      </Button>
      <ul className="overflow-auto">
        {stats ? stats.map((stat) => (
          <li key={stat.attributes.OBJECTID}>{`${stat.attributes.Country_Region} : ${stat.attributes.Confirmed}`}</li>
        )) : <p>Problem loading the data, please refresh after a while.</p>
        }
      </ul>
    </div>
  )
}

export default Countries

