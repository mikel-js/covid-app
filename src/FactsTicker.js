import React from 'react';
import Ticker from 'react-ticker';
 
function FactsTicker() {
  return(
    <>
    <h3 style={{color: 'black'}}>Did you know?</h3>
    <Ticker mode='await' speed={10}>
        {() => (
            <>
                <h4>COVID-19's outer layer is made up of lipids(fats), that's why washing with soap is best recommended,<br/> it dissolves the virus' protective layer. Way to go SOAP! </h4>
            </>
        )}
    </Ticker>
    </>
) 

}
export default FactsTicker
