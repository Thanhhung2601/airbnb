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

    const handleSignOut = (event) => {
        event.stopPropagation()
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
    z-index: 2;
    width: 220px;
    right: 0;
    top: 130%;
    padding: 12px 0;
    background-color: white;
    border-radius: 12px;
    text-align: left;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    transition: 0.3s ease;
    &:hover {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
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
            cursor: pointer;
            svg {
                font-size: 1.3rem;
            }
        }
    }
    .nav-profile {
        li {
            list-style: none;
            transition: 0.3s ease;
            a {
                padding: 12px;
                color: black;
                display: inline-block;
                width: 100%;
            }
            &:hover {
                background-color: #f2f2f2;
            }
        }
    }
`

export default NavProfile
