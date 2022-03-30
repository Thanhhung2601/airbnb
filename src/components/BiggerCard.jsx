import React from 'react'
import styled from 'styled-components'
import { biggerCard } from '../data/homeData'
import { Grid } from '@mui/material'
import ButtonBs from './ButtonBs'
import Container from './Container'
import TitleHp from './TitleHp'

const BiggerCard = ({ title }) => {
    return (
        <BiggerCardStyled>
            <div className="bigger-card">
                <Container>
                    <TitleHp text={title} />
                    <Grid container spacing={3}>
                        {biggerCard.map((item) => {
                            return (
                                <Grid item sm={6} xs={12} key={item.id}>
                                    <div
                                        className="bigger-card__item"
                                        style={{
                                            backgroundImage: `url(${item.image})`,
                                        }}
                                    >
                                        <div className="text">
                                            <h1>{item.title}</h1>
                                            <div className="btn">
                                                <ButtonBs text={item.btn} />
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </div>
        </BiggerCardStyled>
    )
}

const BiggerCardStyled = styled.div`
    .bigger-card {
        .bigger-card__item {
            border-radius: 12px;
            position: relative;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            padding-top: 110%;
        }
        .text {
            top: 60px;
            left: 60px;
            text-align: left;
            position: absolute;
            max-width: 500px;
            h1 {
                font-size: 2.6rem;
                color: white;
                background-color: #99999954;
                padding: 8px;
                border-radius: 4px;
            }
            @media screen and (max-width: 830px) {
                h1 {
                    font-size: 1.6rem !important;
                }
            }
            .btn {
                margin-top: 40px;
            }
            @media screen and (max-width: 1380px) {
                top: 20px;
                left: 20px;
                h1 {
                    font-size: 2rem;
                }
            }
        }
    }
`

export default BiggerCard
