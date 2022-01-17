import React from 'react'
import Nav from './Nav'
import styled from 'styled-components'

const Header = () => {
    return (
        <HeadStyled className="header">
            <Nav />
        </HeadStyled>
    )
}

const HeadStyled = styled.div`
    background-color: black;
`

export default Header
