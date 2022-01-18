import React from 'react'
import styled from 'styled-components'

const ButtonBs = ({ text }) => {
    return <ButtonBsStyled>{text}</ButtonBsStyled>
}

const ButtonBsStyled = styled.span`
    background-color: white;
    padding: 12px 22px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s ease;
    &:hover {
        background-color: #ebebeb;
    }
`

export default ButtonBs
