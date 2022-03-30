import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WishListsPageContent from './WishListsPageContent'
import AOS from 'aos'
import 'aos/dist/aos.css'
import NavBottom from '../../components/NavBottom'

const WishListsPage = () => {
    useEffect(() => {
        AOS.init()
        window.scrollTo(0, 0)
    }, [])

    return (
        <div data-aos="fade-in" data-aos-duration="4000">
            <Header category={'hiddenSearch'} />
            <WishListsPageContent />
            <NavBottom />
            <Footer />
        </div>
    )
}

export default WishListsPage
