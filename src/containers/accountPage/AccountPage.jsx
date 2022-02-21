import React, { useEffect } from 'react'
import styled from 'styled-components'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ContentAccountPage from './ContentAccountPage'

const AccountPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <AccountPageStyled>
            <Header category={'accountPage'} />
            <ContentAccountPage />
            <Footer />
        </AccountPageStyled>
    )
}

const AccountPageStyled = styled.div``

export default AccountPage
