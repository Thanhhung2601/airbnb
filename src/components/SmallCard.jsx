import React from 'react'
import { smallCard } from '../data/homeData'
import styled from 'styled-components'
import { Grid } from '@mui/material'
import Container from './Container'
import TitleHp from './TitleHp'

const SmallCard = ({ title }) => {
    return (
        <SmallCardStyled>
            <div className="small-card">
                <Container>
                    <TitleHp text={title} />
                    <Grid container spacing={3}>
                        {smallCard.map((item) => {
                            return (
                                <Grid item md={3} sm={6} xs={12} key={item.id}>
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
                @media screen and (max-width: 1128px) {
                    h1 {
                        font-size: 1.6rem;
                    }
                    p {
                        font-size: 1rem;
                    }
                }
            }
        }
    }
`

export default SmallCard
