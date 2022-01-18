import React from 'react'
import styled from 'styled-components'
import { biggerCard } from '../data/homeData'
import { Container, Grid } from '@mui/material'
import ButtonBs from './ButtonBs'

const BiggerCard = ({ title }) => {
    return (
        <BiggerCardStyled>
            <div className="bigger-card">
                <Container maxWidth="xs">
                    <div className="title">
                        <h1>{title}</h1>
                    </div>
                    <Grid container spacing={3}>
                        {biggerCard.map((item) => {
                            return (
                                <Grid item xs={6} key={item.id}>
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
        .title {
            h1 {
                text-align: left;
                font-size: 2.5rem;
                font-weight: 500;
            }
            margin-bottom: 50px;
        }
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
            .btn {
                margin-top: 40px;
            }
        }
    }
`

export default BiggerCard
