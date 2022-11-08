import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    border-bottom: 3px solid grey;
    border-radius: 1px;
    border-width: 5px;
`
const Header = () => {
  return (
    <Container>PortFolio</Container>
  )
}

export default Header