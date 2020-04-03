import React from 'react';
import styled from 'styled-components'


const HeaderWrapper = styled.header`
  width: 100vw;
  height: 10vh;
  color: white;
  display: flex;
  flex-direction: row;
  background: #d31027; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #d31027, #ea384d); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #d31027, #ea384d); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  img {
    height: 15vh;
    width: 10vw;
    margin-left: 17%;
    -webkit-box-shadow: 10px 10px 5px 0px #800000;
    -moz-box-shadow: 10px 10px 5px 0px #800000;
    box-shadow: 10px 10px 5px 0px #800000;
  }
  h3 {
    align-items: center;
    color: #eaeafa;
    margin: auto 3em;
  }

`

function Header() {
  return (
    <HeaderWrapper>
      <img alt='' src={require('./images/virus.jpg')} />
      <h3>WIN AGAINST COVID-19</h3>
    </HeaderWrapper>
  );
}

export default Header;
