import React from 'react'
import styled from 'styled-components'
import { AiOutlineHeart, AiFillStar } from 'react-icons/ai'
import { Grid } from '@mui/material'

const InfoCardSearch = ({ data }) => {
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
                                <div className="icon">
                                    <AiOutlineHeart />
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
        </InfoCardStyled>
    )
}

const InfoCardStyled = styled.div`
    padding: 20px 0;
    border-top: 1px solid #e6e6e6;
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
                    &:hover {
                        background-color: #f2f2f2;
                    }
                    svg {
                        font-size: 1.5rem;
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
