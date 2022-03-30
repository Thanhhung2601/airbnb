import React from 'react'
import Nav from './Nav'
import styled from 'styled-components'

const Header = ({ category }) => {
    return (
        <HeadStyled className="header" category={category}>
            <Nav category={category} />
        </HeadStyled>
    )
}

const HeadStyled = styled.div`
    background-color: ${(props) =>
        props.category === 'HomeNav' ? 'black' : ''};
    padding-bottom: ${(props) => (props.category === 'HomeNav' ? '40px' : '')};
    @media screen and (max-width: 830px) {
        padding: 0;
    }
`

export default Header
