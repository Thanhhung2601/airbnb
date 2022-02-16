import React from 'react'
import styled from 'styled-components'
import { searchResult } from '../../data/searchResult'
import InfoCardSearch from '../../components/InfoCardSearch'
import { Grid } from '@mui/material'
import { searchSelector } from '../../feature/searchSelector'
import { useSelector } from 'react-redux'
import MapBox from '../../components/Map'

const SearchResult = () => {
    const search = useSelector(searchSelector)
    console.log(search)
    return (
        <SearchResultStyled>
            <div className="search-result">
                <Grid className="s-r-container" container spacing={3}>
                    <Grid item xs={7}>
                        <div className="title-rs">
                            <p>300+ stay in {search.location}</p>
                        </div>
                        <div className="items">
                            {searchResult.map((item) => {
                                return (
                                    <InfoCardSearch
                                        key={item.img}
                                        data={item}
                                    />
                                )
                            })}
                        </div>
                    </Grid>
                    <Grid item xs={5}>
                        <div className="map-box">
                            <MapBox />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </SearchResultStyled>
    )
}

const SearchResultStyled = styled.div`
    margin-top: 32px;
    overflow: hidden;
    .search-result {
        .title-rs {
            text-align: left;
            padding: 8px 0;
            font-size: 1.2rem;
        }
        .s-r-container {
            margin-left: 0;
        }
        .items {
            border-bottom: 1px solid #e6e6e6;
        }
        .map-box {
            position: fixed;
            top: 90px;
            height: 100%;
            width: 100%;
        }
    }
`

export default SearchResult
