import React from 'react'
import styled from 'styled-components'
import { BsMapFill } from 'react-icons/bs'

const ButtonMap = ({ showMap, setShowMap }) => {
    return (
        <ButtonStyled>
            <div className="btn-show-map" onClick={() => setShowMap(!showMap)}>
                <span>
                    {showMap ? 'Hiển Thị Danh Sách' : 'Hiển Thị Bản Đồ'}
                </span>
                <BsMapFill />
            </div>
        </ButtonStyled>
    )
}

const ButtonStyled = styled.div`
    position: fixed;
    bottom: 70px;
    left: 50%;
    transform: translate(-50%);
    z-index: 101;
    @media screen and (min-width: 1128px) {
        display: none;
    }
    .btn-show-map {
        display: flex;
        align-items: center;
        padding: 12px 16px;
        border-radius: 24px;
        background-color: black;
        color: white;
        cursor: pointer;
        span {
            padding-right: 8px;
            white-space: nowrap;
        }
    }
`

export default ButtonMap
