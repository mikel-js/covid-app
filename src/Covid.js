import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Countries from './Countries';
import InfoPage from './InfoPage';
import useTotalState from './hooks/useTotalState';
import { Container, Row, Col, Button } from 'react-bootstrap'

function Covid() {
  const [stats, setStats] = useState([]);
  const [isAlphabetical, setSortAplhabetical] = useState(false)
  const [isAsc, setAsc] = useState(false)
  const [totalCases, setTotalCases] = useTotalState('cases');
  const [totalRecovered, setTotalRecovered] = useTotalState('recovered');
  const [totalDeaths, setTotalDeath] = useTotalState('death');

  useEffect(() => {
    async function getData() {
      await axios.get('https://services9.arcgis.com/N9p5hsImWXAccRNI/arcgis/rest/services/Nc2JKvYFoAEOFCG5JSI6/FeatureServer/2/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Confirmed%20desc&resultOffset=0&resultRecordCount=190&cacheHint=true').then((resp) => {
        setStats(resp.data.features)
        setTotalCases(resp.data.features)
        setTotalRecovered(resp.data.features)
        setTotalDeath(resp.data.features)
      }).catch(err => {
        console.log('error')
      })
    } getData()
  }, [])

  const sortAZ = () => {
    const sorted = stats.sort((a, b) => {
      if(isAlphabetical === false) {
        return a.attributes.Country_Region > b.attributes.Country_Region ? 1 : -1;
      } else {
        return a.attributes.Country_Region > b.attributes.Country_Region ? -1 : 1;
      }
    });
    setStats([...sorted])
    setSortAplhabetical(!isAlphabetical)
  }

  const sortAsc = () => {
    const sorted = stats.sort((a, b) => {
      if(isAsc === false) {
        return a.attributes.Confirmed > b.attributes.Confirmed ? 1 : -1;
      } else {
        return a.attributes.Confirmed > b.attributes.Confirmed ? -1 : 1;
      }
    });
    setStats([...sorted])
    setAsc(!isAsc)
  }

  return (
    <div className="App" style={{ maxWidth: '80vw', margin: '5vh auto' }}>
      <Container fluid>
        <Row>
          <Col sm={4} style={{ height: "100vh" }}>
            <Countries 
            stats={stats} 
            totalCases={totalCases} 
            totalRecovered={totalRecovered} 
            totalDeaths={totalDeaths} 
            sortAZ={sortAZ} 
            isAlphabetical={isAlphabetical}
            sortAsc={sortAsc}
            isAsc={isAsc}
            />
          </Col>
          <Col sm={8}>
            <InfoPage />
          </Col>
        </Row>
      </Container>


    </div>
  );
}

export default Covid;
