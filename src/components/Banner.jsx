import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Grid } from '@mui/material'
import Container from './Container'

const Banner = ({ image }) => {
    return (
        <BannerStyled>
            <Container>
                <div className="banner-image">
                    <img src={image} alt="" />
                    <div className="banner-text">
                        <h1>
                            Bạn chưa biết đi đâu ? <br /> Tuyệt !
                        </h1>
                        <div className="bgr">
                            <span className="btn-find">Tìm kiếm linh hoạt</span>
                        </div>
                    </div>
                </div>
            </Container>
        </BannerStyled>
    )
}

const BannerStyled = styled.div`
    color: white;
    padding-bottom: 50px;
    background-color: black;
    @media screen and (min-width: 1360px) {
        .MuiContainer-maxWidthXl {
            max-width: 1360px;
        }
    }
    .banner-image {
        @media screen and (max-width: 830px) {
            padding-top: 0;
            h1 {
                padding: 8px !important;
                font-size: 1.6rem !important;
                white-space: nowrap;
            }
            .bgr {
                margin-top: 14px !important;
                padding: 8px 12px !important;
                .btn-find {
                    font-size: 1.2rem !important;
                }
            }
        }
        padding-top: 30px;
        position: relative;
        img {
            width: 100%;
        }
        .banner-text {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 20%;
            h1 {
                font-size: 2.5rem;
                background-color: #9999997a;
                padding: 30px;
                border-radius: 8px;
            }
            .bgr {
                display: inline-block;
                background-color: white;
                margin-top: 40px;
                cursor: pointer;
                padding: 12px 30px;
                border-radius: 50px;
                .btn-find {
                    display: inline-block;
                    font-size: 1.5rem;
                    white-space: nowrap;
                    color: #ff385c;
                }
            }
        }
    }
`

export default Banner
