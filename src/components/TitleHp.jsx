import React from 'react'
import styled from 'styled-components'

const TitleHp = ({ text }) => {
    return (
        <TitleStyled>
            <h1>{text}</h1>
        </TitleStyled>
    )
}

const TitleStyled = styled.div`
    margin-bottom: 50px;
    h1 {
        text-align: left;
        font-size: 2.5rem;
        font-weight: 500;
        @media screen and (max-width: 1128px) {
            font-size: 1.6rem;
        }
    }
`

export default TitleHp
