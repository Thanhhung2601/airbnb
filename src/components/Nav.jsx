import React, { useState, useEffect, lazy, useRef } from 'react'
import { Grid, Badge } from '@mui/material'
import { GoThreeBars } from 'react-icons/go'
import { FiGlobe } from 'react-icons/fi'
import { CgProfile } from 'react-icons/cg'
import styled from 'styled-components'
import { homeMenu } from '../data/homeData'
import NavProfile from './NavProfile'
import Search from './Search'
import OverlayTransparent from './OverlayTransparent'
import SearchSmall from './SearchSmall'
import { useNavigate } from 'react-router-dom'
import Container from './Container'
import DateRangeCpn from './DateRangeCpn'
import NavMobile from './NavMobile'

const Nav = ({ category }) => {
    const [active, setActive] = useState(1)
    const [navProfile, setShowNavProfile] = useState(false)
    const [changeBackground, setChangeBackground] = useState(false)
    const [search, setSearch] = useState('')
    const [showDateRange, setShowDateRange] = useState(false)
    const [fixedNavMb, setfixedNavMb] = useState(false)

    const navigate = useNavigate()

    const searchSmallRef = useRef()

    const handleOnClick = (event, id) => {
        event.preventDefault()
        setActive(id)
    }
    const handleEventScroll = () => {
        if (category === 'HomeNav') {
            window.scrollY > 0 && window.innerWidth <= 830
                ? setfixedNavMb(true)
                : setfixedNavMb(false)
            if (window.scrollY > 76) {
                setChangeBackground(true)
            } else {
                setChangeBackground(false)
                setShowDateRange(false)
            }
        }
    }

    useEffect(() => {
        if (category === 'HomeNav') {
            window.addEventListener('scroll', handleEventScroll)
        }
        if (category === 'SearchPageNav') {
            setChangeBackground(true)
        }
        return () => {
            window.removeEventListener('scroll', handleEventScroll)
        }
    }, [])

    const handleClickProfile = (event) => {
        setShowNavProfile(!navProfile)
    }

    useEffect(() => {
        if (category === 'HomeNav') {
            if (!search) {
                setChangeBackground(false)
                setShowDateRange(false)
            }
        }
        if (category === 'SearchPageNav') {
            if (!search) {
                setShowDateRange(false)
            }
        }
        if (category === 'hiddenSearch') {
            setChangeBackground(true)
        }
    }, [search])

    const handleSearch = (event) => {
        setSearch(event.target.value)
        setChangeBackground(true)
        setShowDateRange(true)
    }

    const handleClose = () => {
        setShowNavProfile(false)
        setShowDateRange(false)
    }

    return (
        <>
            {!fixedNavMb && (
                <NavStyledDesktop
                    className={changeBackground ? 'nav fixed' : 'nav'}
                    background={changeBackground}
                    category={category}
                >
                    <Container>
                        <Grid
                            container
                            alignItems="center"
                            className="container-config"
                        >
                            <Grid item sm={4} className="change-flexbasis">
                                <div className="nav-image">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="4rem"
                                        height="4rem"
                                        fill="none"
                                        viewBox="0 0 602 602"
                                        onClick={() => navigate('/')}
                                    >
                                        <g>
                                            <path
                                                stroke="#E91E63"
                                                strokeMiterlimit="10"
                                                strokeWidth="24"
                                                d="M274.151 201.657c66.903-17.997 131.399-24.32 182.018-19.756l1.077-11.95-1.077 11.95c30.477 2.747 55.643 9.518 73.763 18.622 18.414 9.252 27.823 19.969 30.45 29.72h0c2.776 10.303-.231 25.206-12.364 43.484-11.936 17.98-31.68 37.56-58.646 56.139v.001c-40.663 28.018-98.24 52.637-161.885 69.759-65.406 17.596-128.7 26.024-178.487 21.651h0c-31.569-2.772-57.609-10.095-76.356-19.82-19.058-9.886-28.938-21.326-31.677-31.495h0c-2.636-9.786-.088-23.613 10.677-40.523 10.622-16.687 28.385-34.904 52.944-52.425l-6.724-9.425 6.724 9.425c41.556-29.647 101.985-57.176 169.563-75.357zm0 0l-3.116-11.583 3.116 11.583z"
                                            ></path>
                                            <path
                                                stroke="#E91E63"
                                                strokeMiterlimit="10"
                                                strokeWidth="24"
                                                d="M373.214 228.061c49.036 48.941 86.758 101.635 108.114 147.755l10.889-5.042-10.889 5.042c12.859 27.768 19.578 52.949 20.754 73.194 1.194 20.573-3.382 34.081-10.514 41.232h0c-7.535 7.555-21.944 12.403-43.839 11.035-21.539-1.346-48.366-8.656-77.939-22.719l-.001-.001c-44.594-21.205-94.702-58.759-141.351-105.317l-8.138 8.153 8.138-8.153c-47.94-47.846-86.885-98.447-107.99-143.751h0c-13.383-28.726-20.062-54.939-21.013-76.038-.967-21.448 4-35.725 11.437-43.182h0c7.157-7.176 20.405-11.883 40.432-11.016 19.761.856 44.419 7.13 71.872 19.639l4.975-10.92-4.975 10.92c46.451 21.165 100.505 59.734 150.038 109.169zm0 0l8.477-8.494-8.477 8.494z"
                                            ></path>
                                            <path
                                                stroke="#E91E63"
                                                strokeMiterlimit="10"
                                                strokeWidth="24"
                                                d="M325.98 494.55l9.811 6.909-9.811-6.909c-17.619 25.02-36.067 43.429-53.012 54.569-17.221 11.322-31.207 14.112-40.966 11.511h0c-10.311-2.747-21.714-12.801-31.476-32.447-9.604-19.326-16.687-46.213-19.294-78.855v-.001c-3.933-49.221 3.537-111.393 20.533-175.07l-11.594-3.095 11.594 3.095c17.467-65.44 41.817-124.466 70.5-165.396h0c18.186-25.953 37.549-44.843 55.345-56.216 18.091-11.562 32.94-14.398 43.117-11.686h0c9.793 2.61 20.494 11.73 29.756 29.506 9.139 17.541 16.035 42.032 18.928 72.06 4.896 50.811-1.48 116.906-19.526 184.519-17.867 66.937-44.642 125.951-73.905 167.506z"
                                            ></path>
                                            <animateTransform
                                                attributeName="transform"
                                                attributeType="XML"
                                                dur="20s"
                                                from="0 301 301"
                                                repeatCount="indefinite"
                                                to="360 301 301"
                                                type="rotate"
                                            ></animateTransform>
                                        </g>
                                        <path
                                            fill="#E91E63"
                                            d="M301.007 269.002a62.496 62.496 0 00-4.799-4.301c-1.568-1.254-3.439-2.596-5.615-4.026a30.06 30.06 0 00-7.055-3.411c-2.527-.842-5.007-1.264-7.436-1.264-8.779 0-15.657 2.43-20.635 7.29-4.979 4.859-7.467 11.601-7.467 20.223 0 8.661 4.488 17.479 13.463 26.455 0 0 24.492 21.967 39.544 36.043 15.053-14.076 39.545-36.043 39.545-36.043 8.975-8.976 13.463-17.794 13.463-26.455 0-8.622-2.488-15.364-7.467-20.223-4.978-4.86-11.856-7.29-20.635-7.29-2.429 0-4.909.422-7.436 1.264a30.06 30.06 0 00-7.055 3.411c-2.176 1.43-4.047 2.772-5.615 4.026a62.699 62.699 0 00-4.8 4.301z"
                                        ></path>
                                    </svg>
                                    <span>kobebnb</span>
                                </div>
                            </Grid>
                            <Grid
                                item
                                sm={4}
                                className="change-flexbasis center"
                            >
                                <div className="nav-content-center">
                                    {changeBackground ? (
                                        <SearchSmall
                                            search={search}
                                            handleSearch={handleSearch}
                                            setSearch={setSearch}
                                            searchSmallRef={searchSmallRef}
                                            category={category}
                                        />
                                    ) : (
                                        homeMenu.map((item, index) => {
                                            return (
                                                <div
                                                    className="conten-center"
                                                    key={index}
                                                >
                                                    <a
                                                        href=""
                                                        className={
                                                            item.id === active
                                                                ? 'active'
                                                                : 'effect active'
                                                        }
                                                        onClick={(event) =>
                                                            handleOnClick(
                                                                event,
                                                                item.id
                                                            )
                                                        }
                                                    >
                                                        {item.text}
                                                    </a>
                                                </div>
                                            )
                                        })
                                    )}
                                    {showDateRange && (
                                        <div className="dateRangePicker">
                                            <DateRangeCpn
                                                search={search}
                                                handleClose={handleClose}
                                            />
                                        </div>
                                    )}
                                </div>
                            </Grid>
                            <Grid
                                item
                                sm={4}
                                className="change-flexbasis right"
                            >
                                <div className="nav-content-right">
                                    <div className="content-right__text">
                                        <a href="">Tr??? th??nh ch??? nh??</a>
                                    </div>
                                    <div className="content-right__icon">
                                        <FiGlobe />
                                    </div>
                                    <div className="content-right__profile">
                                        <div
                                            className="ct-r"
                                            onClick={handleClickProfile}
                                        >
                                            <GoThreeBars />
                                            <Badge
                                                className="avatar"
                                                badgeContent={1}
                                                color="error"
                                            >
                                                <CgProfile />
                                            </Badge>
                                        </div>
                                        {navProfile && <NavProfile />}
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                    {navProfile && (
                        <OverlayTransparent
                            setShowNavProfile={setShowNavProfile}
                            handleClose={handleClose}
                        />
                    )}
                </NavStyledDesktop>
            )}

            <NavMobile fixedNav={fixedNavMb} category={category} />
            {!changeBackground && !fixedNavMb && (
                <Search
                    search={search}
                    handleSearch={handleSearch}
                    setSearch={setSearch}
                />
            )}
            {showDateRange && <OverlayTransparent handleClose={handleClose} />}
        </>
    )
}

const NavStyledDesktop = styled.div`
    font-size: 1.05rem;
    color: white;
    padding: 12px 0;
    background-color: ${(props) => (props.background ? 'white' : '')};
    box-shadow: ${(props) =>
        props.category === 'SearchPageNav'
            ? ''
            : 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px'};
    transition: 0.3s ease;
    border-bottom: ${(props) =>
        props.category === 'SearchPageNav' ? '2px solid#f2f2f2' : ''};
    &,
    a {
        color: ${(props) => (props.background ? 'black' : 'white')};
    }
    &.fixed {
        position: fixed;
        z-index: 901;
        top: 0;
        left: 0;
        right: 0;
    }
    @media screen and (max-width: 830px) {
        display: none;
    }
    @media screen and (max-width: 1128px) {
        .container-config {
            .change-flexbasis {
                flex-basis: auto;
                &.change-flexbasis.center {
                    flex: 1;
                    max-width: 100% !important;
                    .nav-content-center {
                        justify-content: flex-start;
                        padding-left: 20px;
                    }
                }
            }
        }
    }
    .nav-image {
        display: flex;
        align-items: center;
        text-align: left;
        svg {
            cursor: pointer;
        }
        span {
            padding-left: 12px;
            font-weight: 700;
            letter-spacing: 2px;
            color: #ff385c;
        }
        @media screen and (max-width: 1128px) {
            & > span {
                display: none;
            }
        }
    }
    .nav-content-center {
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 1360px) {
            a {
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
        .dateRangePicker {
            position: absolute;
            top: 140%;
            z-index: 99;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
                rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
            background-color: white;
            border-radius: 0 0 12px 12px;
            @keyframes opa {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }
            animation: opa 0.3s ease;
            .number-of-guests {
                padding-bottom: 12px;
                .nbg-top {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 16px;
                    h2 {
                        letter-spacing: 2px;
                    }
                    .people-right {
                        display: flex;
                        align-items: center;
                        .people-right__icon {
                            font-size: 1.5rem;
                        }
                        input {
                            width: 50px;
                            padding: 4px 0;
                            border: none;
                            outline: none;
                            margin-left: 12px;
                            font-size: 1.25rem;
                            color: #ff385c;
                        }
                    }
                }
                .btn-bottom {
                    display: flex;
                    justify-content: space-between;
                    padding: 12px 100px 6px 100px;
                    .btn-cancel {
                    }
                }
            }
        }
        a {
            display: inline-block;
            padding: 0 18px;
            position: relative;
            transition: 0.3s linear;
            &:after {
                content: '';
                position: absolute;
                width: 30px;
                height: 0.175rem;
                background: white;
                bottom: -8px;
                left: 40%;
            }
            &:hover:after {
                transform: scale(1, 1);
            }
            &.active {
                opacity: 1;
            }
            &.effect.active {
                opacity: 0.6;
            }
        }
        a:hover {
            opacity: 1 !important;
        }
        .effect {
            &:after {
                transform: scale(0, 1);
                transition: transform 0.3s ease;
            }
        }
    }
    .nav-content-right {
        display: flex;
        justify-content: end;
        height: 38.4px;
        align-items: center;
        .content-right__profile {
            position: relative;
            z-index: 999;
            .ct-r {
                cursor: pointer;
                display: flex;
                align-items: center;
                box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
                transition: 0.3s ease;
                &:hover {
                    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                }
                .avatar {
                    position: relative;
                    font-size: 1.9rem;
                    margin-left: 4px;
                    left: 6px;
                }
                background-color: white;
                color: black;
                padding: 4px 12px;
                border-radius: 20px;
                margin-left: 4px;
            }
        }
        .content-right__icon {
            padding: 0 12px;
            margin: 0 4px;
            display: flex;
            cursor: pointer;
        }
        .content-right__text,
        .content-right__icon {
            transition: 0.3s ease;
            height: 38.4px;
            display: flex;
            align-items: center;
            padding: 20px 14px;
            border-radius: 20px;
            &.content-right__text:hover,
            &.content-right__icon:hover {
                background-color: #d9d9d977;
            }
        }
    }

    @media screen and (min-width: 1360px) {
        .MuiContainer-maxWidthXl {
            max-width: 1360px;
        }
    }
`

export default Nav
