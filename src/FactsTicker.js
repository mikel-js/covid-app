import React from 'react';
import Ticker from 'react-ticker';


function FactsTicker() {
    const updates = [
    { info: "COVID-19's outer layer is made up of lipids(fats), that's why washing with soap is best recommended, it dissolves the virus' protective layer. Way to go SOAP!" },
    { info: "Antibiotics don't work on COVID, as it is caused by a corona virus" }
  ]
  return (
    <>
      <h3 style={{ color: 'black' }}>Did you know?</h3>
      <Ticker mode='await' speed={15} offset="run-in" style={{width: '100%', overflow: 'hidden'}}>
        {() => (
          <>
            <h5>
              {updates.map((update) => (
                 `${update.info}` 
              ))}
            </h5>
          </>
        )}
      </Ticker>
    </>
  )
}

export default FactsTicker
