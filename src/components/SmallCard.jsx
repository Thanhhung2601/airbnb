import React from 'react'
import { smallCard } from '../data/homeData'
import styled from 'styled-components'
import { Container, Grid } from '@mui/material'

const SmallCard = ({ title }) => {
    return (
        <SmallCardStyled>
            <div className="small-card">
                <Container maxWidth="xs">
                    <div className="title">
                        <h1>{title}</h1>
                    </div>
                    <Grid container spacing={3}>
                        {smallCard.map((item) => {
                            return (
                                <Grid item xs={3} key={item.id}>
                                    <div className="small-card__item">
                                        <div className="image">
                                            <img src={item.image} alt="" />
                                        </div>
                                        <div
                                            className="description"
                                            style={{
                                                backgroundColor:
                                                    item.background,
                                            }}
                                        >
                                            <h1>{item.title}</h1>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </div>
        </SmallCardStyled>
    )
}

const SmallCardStyled = styled.div`
    padding: 50px 0;
    .small-card {
        .title {
            text-align: left;
            padding-bottom: 50px;
            h1 {
                font-size: 2.35rem;
                font-weight: 600;
            }
        }
        .small-card__item {
            .image {
                display: flex;
                img {
                    width: 100%;
                    border-radius: 12px 12px 0 0;
                }
            }
            .description {
                text-align: left;
                color: white;
                padding: 20px 0 0 16px;
                height: 200px;
                p {
                    padding-top: 8px;
                    font-size: 1.2rem;
                }
                border-radius: 0 0 12px 12px;
            }
        }
    }
`

export default SmallCard
