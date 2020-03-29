import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Countries from './Countries';
import InfoPage from './InfoPage';
import useTotalState from './hooks/useTotalState';
import { Container, Row, Col } from 'react-bootstrap'

function Covid() {
  const [stats, setStats] = useState([]);
  const [totalCases, getTotalCases] = useTotalState('cases');
  const [totalDeaths, getTotalDeath] = useTotalState('death');
  useEffect(() => {
    async function getData() {
      await axios.get('https://services9.arcgis.com/N9p5hsImWXAccRNI/arcgis/rest/services/Nc2JKvYFoAEOFCG5JSI6/FeatureServer/2/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Confirmed%20desc&resultOffset=0&resultRecordCount=190&cacheHint=true').then((resp) => {
        setStats(resp.data.features)
        getTotalCases(resp.data.features)
        getTotalDeath(resp.data.features)
      }).catch(err => {
        console.log('error')
      })
    } getData()
  }, [])


  return (
    <div className="App" style={{maxWidth: '80vw', margin: '5vh auto'}}>
      <Container fluid>
        <Row>
          <Col sm={4} style={{height: "100vh"}}>
            <Countries stats={stats} totalCases={totalCases} totalDeaths={totalDeaths} />
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
