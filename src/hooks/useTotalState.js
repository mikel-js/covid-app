import { useState } from 'react';

function useTotalState(initialVal) {
  const [value, setValue] = useState(initialVal)

  const getTotal = (value) => {
    const totalState = value.reduce((accTotal, currTotal) => {
      if (initialVal === 'cases') {
        return (
          accTotal + currTotal.attributes.Confirmed
        )
      }
      else if (initialVal === 'death') {
        return (
          accTotal + currTotal.attributes.Deaths
        )
      }
    }, 0)
    setValue(totalState)
  }
  return [value, getTotal]
}

export default useTotalState;