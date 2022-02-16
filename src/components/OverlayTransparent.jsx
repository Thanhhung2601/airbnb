import React, { useState } from 'react'
import styled from 'styled-components'

const OverlayTransparent = ({ handleClose }) => {
    return <OverLayStyled onClick={handleClose}></OverLayStyled>
}

const OverLayStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
`

export default OverlayTransparent
