import React from 'react'
import styled from 'styled-components'

const Container = (props) => {
    return <ContainerStyled>{props.children}</ContainerStyled>
}

const ContainerStyled = styled.div`
    width: 100%;
    @media screen and (min-width: 1128px) {
        padding: 0 80px;
    }
    @media screen and (max-width: 1128px) {
        padding: 0 40px;
    }
    @media screen and (max-width: 830px) {
        padding: 0 24px;
    }
`

export default Container
