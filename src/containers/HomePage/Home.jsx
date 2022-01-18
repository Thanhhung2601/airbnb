import React from 'react'
import Header from '../../components/Header'
import SmallCard from '../../components/SmallCard'
import BiggerCard from '../../components/BiggerCard'
import HighLightSectionHome from '../../components/HighLightSectionHome'
import Footer from '../../components/Footer'

const Home = () => {
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
