import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineHeart, AiFillStar } from 'react-icons/ai'
import { Grid } from '@mui/material'
import OverlayTransparent from './OverlayTransparent'
import WishListPopup from '../containers/wishListsPage/WishListPopup'
import { AiTwotoneHeart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { userSlice } from '../feature/userSlice'
import { useParams } from 'react-router-dom'
import { wishListSelector } from '../feature/wishListSelector'
import { searchSlice } from '../feature/searchSlice'
import { toast } from 'react-toastify'

const InfoCardSearch = ({ data }) => {
    const [showPopup, setShowPopup] = useState(false)
    const [wish, setWish] = useState(null)
    const dispatch = useDispatch()
    const wishlist = useSelector(wishListSelector)

    const handleClick = () => {
        if (!data.liked) {
            setShowPopup(true)
            setWish(data)
        } else {
            dispatch(userSlice.actions.deleteSubWishItem({ data }))
            dispatch(searchSlice.actions.unLikeWish(data))
            toast(`❤️ Đã xóa `, {
                hideProgressBar: true,
            })
        }
    }
    console.log(wishlist)

    return (
        <InfoCardStyled>
            <Grid container className="infoCard" spacing={2}>
                <Grid item xs={4}>
                    <div className="infoCard-img">
                        <img src={data.img} alt="" />
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div className="infoCard-description">
                        <div className="infoCard-description-t">
                            <div className="location">
                                <p>{data.location}</p>
                                <div className="icon" onClick={handleClick}>
                                    {data.liked ? (
                                        <AiTwotoneHeart className="liked-btn" />
                                    ) : (
                                        <AiOutlineHeart />
                                    )}
                                </div>
                            </div>
                            <div className="title">
                                <h3>{data.title}</h3>
                            </div>
                            <div className="description">
                                <p>{data.description}</p>
                            </div>
                        </div>
                        <div className="info-bottom">
                            <div className="star">
                                <AiFillStar />
                                {data.star}
                            </div>
                            <div className="price">{data.price}</div>
                        </div>
                    </div>
                </Grid>
            </Grid>
            {showPopup && <OverlayTransparent level={'change z-index'} />}
            {showPopup && (
                <WishListPopup setShowPopup={setShowPopup} wish={wish} />
            )}
        </InfoCardStyled>
    )
}

const InfoCardStyled = styled.div`
    padding: 20px 0;
    border-top: 1px solid #e6e6e6;
    @media screen and (max-width: 830px) {
        .MuiGrid-item {
            flex-basis: 100%;
            max-width: 100%;
            padding-right: 24px;
            .infoCard-img {
                img {
                    width: 100% !important;
                    height: 100% !important;
                }
            }
            .infoCard-description {
                flex-direction: column-reverse !important;
                .icon {
                    top: 3px !important;
                }
            }
        }
    }
    .infoCard {
        .infoCard-img {
            img {
                width: 100%;
                height: 200px;
                object-fit: cover;
                border-radius: 12px;
            }
        }
        .infoCard-description {
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: space-between;
            .location {
                position: relative;
                text-align: left;
                .icon {
                    position: absolute;
                    display: flex;
                    right: 0;
                    top: -8px;
                    padding: 8px;
                    border-radius: 50%;
                    align-items: center;
                    text-align: center;
                    transition: 0.3s ease;
                    cursor: pointer;
                    z-index: 99;
                    &:hover {
                        background-color: #f2f2f2;
                    }
                    svg {
                        font-size: 1.5rem;
                    }
                    .liked-btn {
                        color: #ff385c;
                    }
                }
            }
            .info-bottom {
                display: flex;
                justify-content: space-between;
                .star {
                    display: flex;
                    align-items: center;
                    svg {
                        color: #ff385c;
                        font-size: 1.2rem;
                        margin-right: 4px;
                    }
                }
            }
            .title,
            .description {
                text-align: left;
            }
            .title {
                h3 {
                    position: relative;
                    font-weight: 500;
                    padding: 4px 0 8px 0;
                    margin-bottom: 8px;
                    &::after {
                        content: '';
                        position: absolute;
                        width: 50px;
                        height: 1px;
                        background-color: #d9d9d9;
                        left: 0;
                        bottom: -3px;
                    }
                }
            }
        }
    }
`

export default InfoCardSearch
