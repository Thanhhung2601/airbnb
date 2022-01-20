import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Container, Grid } from '@mui/material'

const Banner = ({ image }) => {
    return (
        <BannerStyled>
            <Container maxWidth="xs">
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
    .banner-image {
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
                    -webkit-text-fill-color: transparent !important;
                    background: -webkit-linear-gradient(
                        90deg,
                        #6f019c 0%,
                        #c6017e 135.12%
                    ) !important;
                    background: -moz-linear-gradient(
                        90deg,
                        #6f019c 0%,
                        #c6017e 135.12%
                    ) !important;
                    background: linear-gradient(
                        90deg,
                        #6f019c 0%,
                        #c6017e 135.12%
                    ) !important;
                    -webkit-background-clip: -webkit-text !important;
                    -webkit-background-clip: text !important;
                }
            }
        }
    }
`

export default Banner
