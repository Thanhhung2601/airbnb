import React from 'react'
import styled from 'styled-components'
import { Grid } from '@mui/material'
import { useSelector } from 'react-redux'
import { wishListSelector } from '../../feature/wishListSelector'
import { useNavigate } from 'react-router-dom'
import Container from '../../components/Container'

const WishListsPageContent = () => {
    const wishList = useSelector(wishListSelector)
    const navigate = useNavigate()

    return (
        <WishListStyled>
            <Container>
                <div className="wishlist">
                    <div className="wishlist-title">
                        <h1>Yêu thích</h1>
                    </div>
                    <div className="wishlist-item">
                        <Grid container spacing={3}>
                            {wishList.map((item) => {
                                return (
                                    <Grid
                                        item
                                        md={4}
                                        sm={6}
                                        xs={12}
                                        key={item.id}
                                    >
                                        <div
                                            className="wishlist-item__content"
                                            onClick={() =>
                                                navigate(
                                                    `/wishlists/${item.id}`
                                                )
                                            }
                                        >
                                            <div className="img">
                                                <img
                                                    src={
                                                        item.subWishLists[0]
                                                            ? item
                                                                  .subWishLists[0]
                                                                  .img
                                                            : 'https://img4.thuthuatphanmem.vn/uploads/2020/05/12/hinh-anh-xam-don-gian_103624444.jpg'
                                                    }
                                                    alt=""
                                                />
                                            </div>
                                            <p className="wishlist-item-name">
                                                {item.nameWishLists}
                                            </p>
                                        </div>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </div>
                </div>
            </Container>
        </WishListStyled>
    )
}

const WishListStyled = styled.div`
    margin-top: 88px;
    min-height: calc(100vh - 88px);
    @media screen and (max-width: 830px) {
        margin-top: 0;
        .wishlist {
            .wishlist-title {
                padding-top: 0 !important;
            }
        }
    }
    .wishlist {
        .wishlist-title {
            padding-top: 50px;
            text-align: left;
            h1 {
                font-weight: 500;
            }
        }
        .wishlist-item {
            padding-top: 40px;
            .wishlist-item__content {
                padding-bottom: 8px;
                cursor: pointer;
                img {
                    width: 100%;
                    height: 214px;
                    object-fit: cover;
                    border-radius: 16px;
                }
                .wishlist-item-name {
                    padding-top: 4px;
                    text-align: left;
                    font-size: 1.4rem;
                    font-weight: 500;
                }
            }
        }
    }
`

export default WishListsPageContent
