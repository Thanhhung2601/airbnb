import React, { useState } from 'react'
import styled from 'styled-components'

const OverlayTransparent = ({ handleClose, level }) => {
    return <OverLayStyled onClick={handleClose} level={level}></OverLayStyled>
}

const OverLayStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: ${(props) => (props.level ? '902' : '900')};
    background-color: rgb(0, 0, 0, 0.5);
`

export default OverlayTransparent
