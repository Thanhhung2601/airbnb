import React from 'react'
import Nav from './Nav'
import styled from 'styled-components'
import Search from './Search'
import Banner from './Banner'

const Header = () => {
    return (
        <HeadStyled className="header">
            <Nav />
            <Search />
            <Banner image={'image.jpg'} />
        </HeadStyled>
    )
}

const HeadStyled = styled.div`
    background-color: black;
    padding-bottom: 40px;
    margin-bottom: 30px;
`

export default Header
