import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Countries from './Countries'

function Covid() {
  const [stats, setStats] = useState("");
  useEffect(() => {
    async function getData() {
      const resp = await axios.get('https://services9.arcgis.com/N9p5hsImWXAccRNI/arcgis/rest/services/Nc2JKvYFoAEOFCG5JSI6/FeatureServer/2/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Confirmed%20desc&resultOffset=0&resultRecordCount=190&cacheHint=true')
      setStats(resp.data.features)
    } getData()
  }, [])


  return (
    <div className="App">
      <h1>Hi</h1>
      <Countries stats={stats} />
    </div>
  );
}

export default Covid;
