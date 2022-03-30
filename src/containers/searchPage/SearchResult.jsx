import React, { useState } from 'react'
import styled from 'styled-components'
import InfoCardSearch from '../../components/InfoCardSearch'
import { Grid, Pagination } from '@mui/material'
import { searchSelector } from '../../feature/searchSelector'
import { useSelector } from 'react-redux'
import MapBox from '../../components/Map'
import ButtonMap from '../../components/ButtonMap'

const SearchResult = () => {
    const search = useSelector(searchSelector)
    const [showMapFixed, setShowMapFixed] = useState(false)

    return (
        <SearchResultStyled>
            <div className="search-result">
                <Grid className="s-r-container result" container spacing={3}>
                    <Grid item xs={7} className="result">
                        <div className="title-rs">
                            <p>300+ stay in {search.location}</p>
                        </div>
                        <div className="items">
                            {search.result.map((item) => {
                                return (
                                    <InfoCardSearch
                                        key={item.img}
                                        data={item}
                                    />
                                )
                            })}
                        </div>
                        <div className="pagination">
                            <Pagination count={10} />
                        </div>
                    </Grid>
                    <Grid item xs={5}>
                        <MapBox showMap={showMapFixed} />
                    </Grid>
                </Grid>
            </div>
            <ButtonMap showMap={showMapFixed} setShowMap={setShowMapFixed} />
        </SearchResultStyled>
    )
}

const SearchResultStyled = styled.div`
    margin-top: 88px;
    overflow: hidden;

    @media screen and (max-width: 830px) {
        margin-top: 0;
    }
    @media screen and (max-width: 1128px) {
        .result {
            flex-basis: 100%;
            max-width: 100%;
            .infoCard-description {
                padding-right: 24px;
            }
        }
    }
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
        .hidden-map {
            height: 100%;
            width: 100%;
        }
        .pagination {
            display: flex;
            justify-content: center;
            margin-top: 22px;
        }
    }
`

export default SearchResult
