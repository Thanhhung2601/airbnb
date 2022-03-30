import React from 'react'
import styled from 'styled-components'
import { Container } from '@mui/material'
import { useSelector } from 'react-redux'
import { userSelector } from '../../feature/userSelector'

const ContentAccountPage = () => {
    const user = useSelector(userSelector)

    console.log(user)

    return (
        <ContentStyled>
            <Container maxWidth="md">
                <div className="infor-account">
                    <h1>Tài khoản</h1>
                    {user.user && (
                        <p>{`${user.user.name.toUpperCase()} , ${
                            user.user.email
                        }`}</p>
                    )}
                </div>
            </Container>
        </ContentStyled>
    )
}

const ContentStyled = styled.div`
    margin-top: 88px;
    min-height: calc(100vh - 88px) !important;
    @media screen and (max-width: 830px) {
        margin-top: 0;
    }
    .infor-account {
        text-align: left;
        padding-top: 30px;
        h1 {
            font-weight: 500;
            margin-bottom: 8px;
        }
        p {
            font-size: 1.18rem;
        }
    }
`

export default ContentAccountPage
