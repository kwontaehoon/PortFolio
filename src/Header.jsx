import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
`
const Header = () => {
  return (
    <Container>PortFolio</Container>
  )
}

export default Header