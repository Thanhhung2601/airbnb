import React from 'react'
import styled from 'styled-components'
import { Container } from '@mui/material'
import ButtonBs from './ButtonBs'

const HighLightSectionHome = () => {
    return (
        <HighLightStyled>
            <Container maxWidth="xs">
                <div className="highLightSection">
                    <div className="highLightSection-text">
                        <div className="text">
                            <h1>Bạn có thắc mắc về việc đón tiếp khách?</h1>
                        </div>
                        <div className="btn">
                            <ButtonBs text={'Hỏi ý kiến chủ nhà siêu cấp'} />
                        </div>
                    </div>
                </div>
            </Container>
        </HighLightStyled>
    )
}

const HighLightStyled = styled.div`
    margin-top: 80px;
    padding-bottom: 50px;
    .highLightSection {
        padding: 80px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url('highlightSc.jpg');
        border-radius: 12px;
        .highLightSection-text {
            text-align: left;
            display: flex;
            flex-direction: column;

            .text {
                h1 {
                    font-size: 5.5rem;
                    max-width: 700px;
                    color: white;
                    padding-bottom: 150px;
                }
            }
        }
    }
`

export default HighLightSectionHome
