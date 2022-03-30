import React, { useEffect } from 'react'
import Header from '../../components/Header'
import SmallCard from '../../components/SmallCard'
import BiggerCard from '../../components/BiggerCard'
import HighLightSectionHome from '../../components/HighLightSectionHome'
import Footer from '../../components/Footer'
import { useNavigate } from 'react-router-dom'
import Banner from '../../components/Banner'
import { userSlice } from '../../feature/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { userSelector } from '../../feature/userSelector'
import AOS from 'aos'
import 'aos/dist/aos.css'
import NavBottom from '../../components/NavBottom'

const Home = () => {
    const navigate = useNavigate()
    const user = useSelector(userSelector)

    useEffect(() => {
        AOS.init()
        if (!user.user && !user.isLoging) {
            navigate('/login')
        }
    }, [])

    return (
        <div data-aos="fade-in" data-aos-duration="4000">
            <Header category={'HomeNav'} />
            <Banner image={'image.jpg'} />

            <SmallCard
                title={'Cảm hứng cho chuyến đi tiếp theo của bạn'}
                category="smallCard"
            />
            <BiggerCard title={'Khám phá Trải nghiệm Airbnb'} />
            <HighLightSectionHome />
            <NavBottom />
            <Footer />
        </div>
    )
}

export default Home
