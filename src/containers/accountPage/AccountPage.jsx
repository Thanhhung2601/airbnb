import React, { useEffect } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ContentAccountPage from './ContentAccountPage'
import AOS from 'aos'
import 'aos/dist/aos.css'
import NavBottom from '../../components/NavBottom'

const AccountPage = () => {
    useEffect(() => {
        AOS.init()
        window.scrollTo(0, 0)
    }, [])
    return (
        <div data-aos="fade-in" data-aos-duration="4000">
            <Header category={'hiddenSearch'} />
            <ContentAccountPage />
            <NavBottom />
            <Footer />
        </div>
    )
}

export default AccountPage
