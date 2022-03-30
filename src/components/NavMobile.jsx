import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaSearchLocation } from 'react-icons/fa'
import Container from './Container'
import SearchMobile from './SearchMobile'

const NavMobile = ({ fixedNav, category }) => {
    const [searchMobile, setSearchMobile] = useState(false)

    return (
        <NavMobileStyled background={category}>
            <div className={fixedNav ? 'btn-wrap fixed' : 'btn-wrap'}>
                <Container>
                    <div
                        className="btn-search"
                        onClick={() => setSearchMobile(true)}
                    >
                        <FaSearchLocation />
                        <span>Bạn sắp đi đâu ?</span>
                    </div>
                </Container>
            </div>
            <SearchMobile
                searchMobile={searchMobile}
                setSearchMobile={setSearchMobile}
            />
        </NavMobileStyled>
    )
}

const NavMobileStyled = styled.div`
    display: none;
    @media screen and (max-width: 830px) {
        display: block;
    }
    .btn-wrap {
        transition: 0.3s ease-in;
        padding: 16px 0;
        .btn-search {
            background-color: ${(props) =>
                props.background ? '#f2f2f2 !important' : ''};
        }

        &.btn-wrap.fixed {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 99;
            background-color: white;
            box-shadow: rgb(0 0 0 / 45%) 0px 25px 20px -20px;
            .btn-search {
                background-color: #f2f2f2;
            }
        }
        .btn-search {
            display: flex;
            align-items: center;
            justify-content: center;
            column-gap: 8px;
            width: 100%;
            border-radius: 50px;
            background-color: white;
            text-align: center;
            padding: 12px 0;
            cursor: pointer;
            svg {
                font-size: 1.2rem;
                color: #dd0f62;
            }
        }
    }
`

export default NavMobile
