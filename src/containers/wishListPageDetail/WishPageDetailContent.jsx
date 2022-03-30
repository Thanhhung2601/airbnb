import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Grid, Pagination } from '@mui/material'
import InfoCardSearch from '../../components/InfoCardSearch'
import MapBox from '../../components/Map'
import { wishListSelector } from '../../feature/wishListSelector'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import EditWishList from './EditWishList'
import OverlayTransparent from '../../components/OverlayTransparent'
import ButtonMap from '../../components/ButtonMap'

const WishPageDetailContent = () => {
    const wishList = useSelector(wishListSelector)
    const [wishListItem, setwishListItem] = useState({})
    const [showPopup, setShowpopup] = useState(false)
    const { id } = useParams()
    const [showMap, setShowMap] = useState(false)
    console.log('WishPageDetailContent Rerender', wishListItem)

    useEffect(() => {
        wishList.forEach((item) => {
            if (item.id === id) {
                setwishListItem(item)
            }
        })
    }, [wishList])

    return (
        <StyledPage>
            <Grid className="s-r-container" container spacing={3}>
                <Grid item xs={7} className="result">
                    <div className="items">
                        <div className="title">
                            <h2 className="listName">
                                {wishListItem.nameWishLists &&
                                    wishListItem.nameWishLists}
                            </h2>
                            <div
                                className="edit"
                                onClick={() => setShowpopup(true)}
                            >
                                <HiOutlineDotsHorizontal />
                            </div>
                        </div>
                        {showPopup && (
                            <EditWishList
                                handleClose={setShowpopup}
                                setShowpopup={setShowpopup}
                                wishListItem={wishListItem}
                            />
                        )}
                        {wishListItem.subWishLists &&
                            wishListItem.subWishLists.map((item) => {
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
                        <MapBox showMap={showMap} />
                    </div>
                </Grid>
            </Grid>
            {showPopup && <OverlayTransparent level={'change z-index'} />}
            <ButtonMap showMap={showMap} setShowMap={setShowMap} />
        </StyledPage>
    )
}

const StyledPage = styled.div`
    margin-top: 88px;
    overflow: hidden;
    @media screen and (max-width: 830px) {
        margin-top: 0;
    }
    @media screen and (max-width: 1128px) {
        .result {
            flex-basis: 100%;
            max-width: 100%;
            padding-right: 24px;
            .title {
                padding-right: 24px;
            }
            .infoCard-description {
                padding-right: 40px;
            }
        }
    }
    .items {
        .title {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .listName {
                padding: 12px 0;
                font-weight: 500;
                font-size: 1.65rem;
                text-align: left;
            }
            .edit {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 35px;
                height: 35px;
                cursor: pointer;
                border-radius: 50%;
                transition: 0.3s ease;
                font-size: 1.35rem;
                &:hover {
                    background-color: #f2f2f2;
                }
            }
        }
    }
    .css-zow5z4-MuiGrid-root {
        margin-left: 0;
    }
    .map-box {
        height: 100%;
    }
`

export default WishPageDetailContent
