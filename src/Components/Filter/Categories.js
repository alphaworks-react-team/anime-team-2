import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { RequestOptions } from '../../utils/index'

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`
const DropdownLinks = styled.a`
  color: black;
  padding: 0 16px;
  text-decoration: none;
  display: block;
`

const Categories = () => {
  const [categories, setCategories] = useState([])

  const { Categories: CategoriesRequest } = RequestOptions

  const renderCategories = () => {
    return categories?.map((category, index) => {
      return (
        <DropdownLinks key={index} to='#'>
          {category.title}
        </DropdownLinks>
      )
    })
  }

  useEffect(() => {
    ;(async () => {
      CategoriesRequest(40, data => {
        setCategories(data)
      })
    })()
  }, [])

  return <DropdownContent>{renderCategories()}</DropdownContent>
}

export default Categories
