import React from 'react'
import styled from 'styled-components'
import { Container } from '@mui/material'
import { useSelector } from 'react-redux'
import { userSelector } from '../../feature/userSelector'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { authentication } from '../../firebase'
import { signOut } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { userSlice } from '../../feature/userSlice'

const ContentAccountPage = () => {
    const user = useSelector(userSelector)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSignOut = () => {
        signOut(authentication)
            .then(async () => {
                console.log('SignOut success')
                await dispatch(userSlice.actions.logout({}))
                navigate('/login')
            })
            .catch((error) => console.log(error))
    }

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
                    <div className="log-out">
                        <Button
                            onClick={handleSignOut}
                            color="inherit"
                            variant="outlined"
                            fullWidth
                        >
                            Đăng xuất
                        </Button>
                    </div>
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
        .log-out {
            display: none;
            margin-top: 24px;
            @media screen and (max-width: 830px) {
                display: block;
            }
        }
    }
`

export default ContentAccountPage
