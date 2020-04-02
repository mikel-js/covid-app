import React, { useState } from 'react';
import Ticker from 'react-ticker';


function FactsTicker() {
    const updates = [
    { info: "COVID-19's outer layer is made up of lipids(fats), that's why washing with soap is best recommended, it dissolves the virus' protective layer. Way to go SOAP!" },
    { info: "Antibiotics don't work on COVID, as it is caused by a corona virus" }
  ]

  const randomInfo = () => {
    const randomNumber = Math.floor(Math.random() * updates.length);
    const info = updates[randomNumber].info;
    return info;
  }

  const [isMoving, setIsMoving] = useState(true)

  return (
    <>
      <h3 style={{ color: 'black' }}>Did you know?</h3>
<<<<<<< HEAD
      <Ticker mode='await' speed={15} offset="run-in" style={{width: '100%', overflow: 'hidden'}}>
=======
      <Ticker
        move={isMoving}
        mode='await'
        speed={15} >
>>>>>>> 10b73991197119a01cbee513d23bbaab2f0c255b
        {() => (
          <>
            <h5 style={{ cursor: 'cell' }}
              onMouseOver={() => setIsMoving(false)}
              onMouseOut={() => setIsMoving(true)}
            >
              {randomInfo()}
            </h5>
          </>
        )}
      </Ticker>
    </>
  )
}

export default FactsTicker
