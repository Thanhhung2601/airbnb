import React from 'react'
import styled from 'styled-components'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WishPageDetailContent from './WishPageDetailContent'
import NavBottom from '../../components/NavBottom'

const WishListPageDetail = () => {
    return (
        <StyledMain>
            <Header category={'hiddenSearch'} />
            <WishPageDetailContent />
            <NavBottom />
            <Footer />
        </StyledMain>
    )
}

const StyledMain = styled.div``

export default WishListPageDetail
