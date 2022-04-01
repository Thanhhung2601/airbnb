import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaSearchLocation } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiTrip } from 'react-icons/bi'
import { TiMessage } from 'react-icons/ti'
import { FaRegUserCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Data = [
    {
        id: 1,
        Icon: FaSearchLocation,
        text: 'Khám phá',
    },
    {
        id: 2,
        Icon: AiOutlineHeart,
        text: 'Yêu thích',
    },
    {
        id: 3,
        Icon: BiTrip,
        text: 'Chuyến đi',
    },
    {
        id: 4,
        Icon: TiMessage,
        text: 'Hộp thư',
    },
    {
        id: 5,
        Icon: FaRegUserCircle,
        text: 'Hồ sơ',
    },
]

const NavBottom = () => {
    const [isActive, setIsActive] = useState(1)
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const handleOnClick = (id) => {
        setIsActive(id)
        switch (id) {
            case 1: {
                navigate('/')
                break
            }
            case 2: {
                navigate('/wishlists')
                break
            }
            case 5: {
                navigate('/account-settings')
                break
            }
        }
    }
    useEffect(() => {
        switch (pathname) {
            case '/': {
                setIsActive(1)
                break
            }
            case '/wishlists': {
                setIsActive(2)
                break
            }
            case '/account-settings': {
                setIsActive(5)
                break
            }
        }
    }, [])

    return (
        <NavBottomStyled>
            <div className="nav-bottom">
                {Data.map((item) => {
                    return (
                        <div
                            className={
                                item.id === isActive ? 'item active' : 'item'
                            }
                            key={item.id}
                            onClick={() => handleOnClick(item.id)}
                        >
                            <div className="item-icon">{<item.Icon />}</div>
                            <div className="item-text">
                                <span>{item.text}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </NavBottomStyled>
    )
}

const NavBottomStyled = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: none;
    background-color: white;
    z-index: 999;
    @media screen and (max-width: 830px) {
        display: block;
    }
    .nav-bottom {
        display: flex;
        justify-content: center;
        padding: 12px 0;
        .item {
            width: 112px;
            cursor: pointer;
            opacity: 0.5;
            &.active {
                opacity: 1;
                color: #dd0f62;
            }
            transition: 0.2s ease;
            .item-icon {
                display: flex;
                justify-content: center;
                font-size: 1.45rem;
            }
            .item-text {
                font-size: 0.8rem;
            }
        }
    }
`

export default NavBottom
