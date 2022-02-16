import React from 'react'
import styled from 'styled-components'
import { Container, Grid } from '@mui/material'
import { footerData } from '../data/homeData'
import { FiGlobe } from 'react-icons/fi'
import { MdAttachMoney } from 'react-icons/md'
import {
    AiOutlineFacebook,
    AiOutlineTwitter,
    AiOutlineInstagram,
} from 'react-icons/ai'

const Footer = () => {
    return (
        <FooterStyled>
            <div className="footer">
                <Container maxWidth="xs">
                    <Grid container spacing={3}>
                        {footerData.map((item, index) => {
                            return (
                                <Grid item xs={3} key={index}>
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
                            <Grid item xs={6}>
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
                            <Grid item xs={6}>
                                <div className="bottom-r">
                                    <a href="">
                                        <div className="language">
                                            <FiGlobe />
                                            Tiếng việt(VN)
                                        </div>
                                    </a>
                                    <a href="">
                                        <div className="money">
                                            <MdAttachMoney />
                                            VND
                                        </div>
                                    </a>
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
    .footer {
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
        }
        .ft-bt {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #d9d9d9;
            .bottom-l {
                text-align: left;
                li {
                    display: inline-block;
                    padding: 0 8px;
                }
            }
            .bottom-r {
                display: flex;
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
            }
        }
    }
`

export default Footer
