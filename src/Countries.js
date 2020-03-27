import React, { useState, useEffect } from 'react';

function Countries({ stats }) {
  return (
    <div>
    <h1>Total dapt nandito</h1>
      {stats ? stats.map((stat) => (
        <p>{`${stat.attributes.Country_Region} : ${stat.attributes.Confirmed}`}</p>
      )) : <p>hi</p>
      }
    </div>
  )
}

export default Countries

