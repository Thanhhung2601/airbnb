import React, { useEffect } from 'react'
import Header from '../../components/Header'
import SmallCard from '../../components/SmallCard'
import BiggerCard from '../../components/BiggerCard'
import HighLightSectionHome from '../../components/HighLightSectionHome'
import Footer from '../../components/Footer'
import { userSelector } from '../../feature/userSelector'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const { user } = useSelector(userSelector)
    const navigate = useNavigate()

    useEffect(() => {
        if (!user.user) {
            console.log('check navigate')
            navigate('/login')
        }
    }, [])

    return (
        <>
            <Header />
            <SmallCard
                title={'Cảm hứng cho chuyến đi tiếp theo của bạn'}
                category="smallCard"
            />
            <BiggerCard title={'Khám phá Trải nghiệm Airbnb'} />
            <HighLightSectionHome />
            <Footer />
        </>
    )
}

export default Home
