import React from 'react'
import { GiMagicGate } from 'react-icons/gi'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Categories, Home } from '../../../Pages/index'

const LinkList = styled.ul`
  list-style-type: none;
`
const ListItem = styled.li`
  text-decoration: none;
`

const Links = () => {
  return (
    <LinkList>
      <ListItem>
        <NavLink exact to='/'>
          <GiMagicGate />
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to='/categories'>Categories</NavLink>
      </ListItem>
    </LinkList>
  )
}

export default Links
