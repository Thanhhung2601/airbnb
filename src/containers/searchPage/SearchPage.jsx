import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useRoutes, useSearchParams } from 'react-router-dom'
import { format } from 'date-fns'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchSlice } from '../../feature/searchSlice'
import SearchResult from './SearchResult'
import AOS from 'aos'
import 'aos/dist/aos.css'
import NavBottom from '../../components/NavBottom'

const SearchPage = () => {
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams()
    const location = searchParams.get('location')
    const startDate = searchParams.get('startDate')
    const endDate = searchParams.get('endDate')
    const NumberofGuests = searchParams.get('NumberofGuests')

    const startDateformat = format(new Date(startDate), 'dd MMMM yy')
    const endDateformat = format(new Date(endDate), 'dd MMMM yy')

    useEffect(() => {
        AOS.init()
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        dispatch(
            searchSlice.actions.search({
                location,
                startDateformat,
                endDateformat,
                NumberofGuests,
            })
        )
    }, [location])

    return (
        <div data-aos="fade-in" data-aos-duration="4000">
            <Header category={'SearchPageNav'} />
            <SearchResult />
            <NavBottom />
            <Footer />
        </div>
    )
}

export default SearchPage
