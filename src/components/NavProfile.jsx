import React from 'react'
import styled from 'styled-components'
import { navProfile } from '../data/homeData'
import { RiLogoutBoxLine } from 'react-icons/ri'
import { authentication } from '../firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userSlice } from '../feature/userSlice'

const NavProfile = () => {
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
        <NavProfileStyled>
            <div className="nav-profile">
                <ul>
                    {navProfile.map((item) => {
                        return (
                            <li key={item.id}>
                                <a href="">{item.text}</a>
                            </li>
                        )
                    })}
                </ul>
                <a>
                    <div className="logout" onClick={handleSignOut}>
                        Logout <RiLogoutBoxLine />
                    </div>
                </a>
            </div>
        </NavProfileStyled>
    )
}

const NavProfileStyled = styled.div`
    position: absolute;
    z-index: 99;
    width: 220px;
    top: 130%;
    right: 0;
    padding: 12px 0;
    background-color: white;
    border-radius: 12px;
    text-align: left;
    a {
        .logout {
            display: flex;
            gap: 12px;
            align-items: center;
            padding-top: 12px;
            padding-left: 12px;
            margin-top: 12px;
            color: black;
            border-top: 1px solid #e6e6e6;
            svg {
                font-size: 1.3rem;
            }
        }
    }
    .nav-profile {
        li {
            padding: 12px;
            list-style: none;
            transition: 0.3s ease;
            a {
                color: black;
            }
            &:hover {
                background-color: #f2f2f2;
            }
        }
    }
`

export default NavProfile
