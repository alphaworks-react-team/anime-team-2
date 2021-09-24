import React from 'react'
import styled from 'styled-components'
import Search from '../Pages/Search/Search'

import { Categories } from '../Filter/index'

const NavStyle = styled.div`
  height: 50px;
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #26466d;

  @media (min-width: 1024px) {
    min-width: 100%;
    justify-content: space-between;
  }
  @media (min-width: 768px) {
    min-width: 100%;
    justify-content: space-around;
  }
  @media (min-width: 425px) {
    min-width: 100%;
    justify-content: space-around;
  }
`

const Dropdown = styled.div`
  position: relative;
  padding: 0;
  margin: 0;
  display: inline-block;
`

const DropdownButton = styled.button`
  background-color: #36648b;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
`

// const DropdownContent = styled.div`
//   display: none;
//   position: absolute;
//   background-color: #f1f1f1;
//   min-width: 160px;
//   box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
//   z-index: 1;
// `
// const DropdownLinks = styled.a`
//   color: black;
//   padding: 0 16px;
//   text-decoration: none;
//   display: block;
// `

const handleClick = event => {}

const Navbar = () => {
  return (
    <NavStyle>
      <Search />
      <Dropdown>
        <DropdownButton>Button</DropdownButton>
        {Categories()}
      </Dropdown>
    </NavStyle>
  )
}

export default Navbar
