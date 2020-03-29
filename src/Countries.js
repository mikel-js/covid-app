import React from 'react';
import './Countries.css'


function Countries({ stats, totalCases, totalDeaths }) {
  return (
    <div>
      <h1>Total Cases {totalCases}</h1>
      <h4>Total Deaths {totalDeaths} </h4>
      
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

