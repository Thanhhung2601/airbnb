import React from 'react'
import Nav from './Nav'
import styled from 'styled-components'

const Header = ({ category }) => {
    return (
        <HeadStyled className="header">
            <Nav category={category} />
        </HeadStyled>
    )
}

const HeadStyled = styled.div`
    background-color: black;
    padding-bottom: 40px;
`

export default Header
