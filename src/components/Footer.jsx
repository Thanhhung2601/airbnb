import React from 'react'
import styled from 'styled-components'
import { Grid } from '@mui/material'
import { footerData } from '../data/homeData'
import { FiGlobe } from 'react-icons/fi'
import { MdAttachMoney } from 'react-icons/md'
import {
    AiOutlineFacebook,
    AiOutlineTwitter,
    AiOutlineInstagram,
} from 'react-icons/ai'
import Container from './Container'

const Footer = () => {
    return (
        <FooterStyled>
            <div className="footer">
                <Container>
                    <Grid container spacing={3}>
                        {footerData.map((item, index) => {
                            return (
                                <Grid
                                    className="changeCol"
                                    item
                                    xs={3}
                                    key={index}
                                >
                                    <div className="footer-section">
                                        <p className="title">{item.title}</p>
                                        <ul>
                                            {item.nav.map((item, index) => {
                                                return (
                                                    <li key={index}>
                                                        {item.text}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </Grid>
                            )
                        })}
                    </Grid>
                    <div className="ft-bt">
                        <Grid container>
                            <Grid item md={6} xs={12}>
                                <div className="bottom-l">
                                    <ul>
                                        <li>
                                            <a href="">© 2022 Airbnb, Inc.</a>
                                        </li>
                                        <li>
                                            <a href="">Quyền riêng tư</a>
                                        </li>
                                        <li>
                                            <a href="">Điều khoản</a>
                                        </li>
                                        <li>
                                            <a href="">Sơ đồ trang web</a>
                                        </li>
                                    </ul>
                                </div>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <div className="bottom-r">
                                    <div className="lg-l">
                                        <a href="">
                                            <div className="language">
                                                <FiGlobe />
                                                Tiếng việt(VN)
                                            </div>
                                        </a>
                                    </div>
                                    <div className="mn-ct">
                                        <a href="">
                                            <div className="money">
                                                <MdAttachMoney />
                                                VND
                                            </div>
                                        </a>
                                    </div>
                                    <div className="social-network">
                                        <a href="">
                                            <AiOutlineFacebook />
                                        </a>
                                        <a href="">
                                            <AiOutlineTwitter />
                                        </a>
                                        <a href="">
                                            <AiOutlineInstagram />
                                        </a>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
        </FooterStyled>
    )
}

const FooterStyled = styled.div`
    margin-top: 20px;
    background-color: #f7f7f7;
    padding: 36px 0;
    li {
        list-style: none;
    }
    @media screen and (max-width: 830px) {
        margin-bottom: 64px;
        .bottom-r {
            padding-top: 12px;
        }
    }
    .footer {
        @media screen and (min-width: 1360px) {
            .MuiContainer-maxWidthXl {
                max-width: 1360px;
            }
        }
        @media screen and (max-width: 1128px) {
            .changeCol {
                flex-basis: 100% !important;
                max-width: 100% !important;
            }
        }
        .footer-section {
            text-align: left;
            li {
                font-weight: 400;
                padding: 8px 0;
            }
            .title {
                padding-bottom: 16px;
                font-weight: 700;
            }
            @media screen and (max-width: 1128px) {
                ul {
                    display: flex;
                    flex-wrap: wrap;
                    li {
                        flex-basis: 33.33333%;
                    }
                }
            }
            @media screen and (max-width: 744px) {
                ul {
                    li {
                        flex-basis: 100%;
                    }
                }
            }
        }
        .ft-bt {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #d9d9d9;

            .bottom-l {
                margin: 0 -8px;
                text-align: left;
                li {
                    display: inline-block;
                    padding: 0 8px;
                }
            }
            .bottom-r {
                margin: 0 -12px;
                display: flex;
                flex-wrap: wrap;
                gap: 22px;
                align-items: center;
                justify-content: end;
                .language,
                .money {
                    display: flex;
                    align-items: center;
                }
                .social-network {
                    margin-left: 30px;
                    a {
                        padding: 0 12px;
                        font-size: 1.3rem;
                    }
                }
                @media screen and (max-width: 420px) {
                    .lg-l,
                    .mn-ct,
                    .social-network {
                        flex-basis: 100%;
                    }
                    margin: 0;
                    .social-network {
                        position: relative;
                        left: -42px;
                        text-align: left;
                    }
                }
            }
        }
    }
`

export default Footer
