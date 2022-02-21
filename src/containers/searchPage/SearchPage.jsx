import React from 'react'
import styled from 'styled-components'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useRoutes, useSearchParams } from 'react-router-dom'
import { format } from 'date-fns'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchSlice } from '../../feature/searchSlice'
import SearchResult from './SearchResult'

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
        console.log('useEffect run')
    }, [location])

    console.log('component re-render')

    return (
        <SearchPageStyled>
            <Header category={'SearchPageNav'} />
            <SearchResult />
            <Footer />
        </SearchPageStyled>
    )
}

const SearchPageStyled = styled.div``

export default SearchPage
