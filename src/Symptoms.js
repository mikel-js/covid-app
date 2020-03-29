import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Symptoms.css'


function Symptoms() {
  return (
    <div>
      <h1>What is COVID-19?</h1>
      <h4>COVID-19 is a highly contagious disease caused by a type of coronavirus. The outbreak of COVID-19 was first reported in December 2019, in Wuhan, China.</h4>
      <h1>Symptoms of COVID-19</h1>
      <Row>
        <Col className='symptoms-common'>
          <h4>Most common symptoms are</h4>
          <ul className='symptoms-list'>
            <li>Fever <img className='symptoms-img' alt='fever' src={require('./images/thermometer.png')} /></li>
            <li>Tiredness<img className='symptoms-img' alt='tired' src={require('./images/face.png')} /></li>
            <li>Dry cough<img className='symptoms-img' alt='cough' src={require('./images/flu.png')} /></li>
          </ul>
        </Col>
        <Col className='symptoms-uncommon'>
          <h4>Some may have </h4>
          <ul className='symptoms-list'>
            <li>Body aches and pains<img className='symptoms-img' alt='pain' src={require('./images/pain.png')} /></li>
            <li>Nasal congestion or runny nose<img className='symptoms-img' alt='runny-nose' src={require('./images/runny-nose.png')} /></li>
            <li>Sore throat<img className='symptoms-img' alt='sore-throat' src={require('./images/sore-throat.png')} /></li>
            <li>Diarrhea<img className='symptoms-img' alt='diarrhea' src={require('./images/diarrhea.png')} /></li>
          </ul>
        </Col>
        <Col className='symptoms-risk'>
          <h5>Older people, people with other medical conditions like hypertension, diabetes or heart problems, are at higher risk of developing serious complications. </h5>
        </Col>
        <h4 className='symptoms-warning'>Seek medical advice when you have fever, cough and difficulty of breathing.</h4>
      </Row>
    </div>
  )
}

export default Symptoms