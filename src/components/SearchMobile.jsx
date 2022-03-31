import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { IoIosArrowBack } from 'react-icons/io'
import DateRangeCpn from './DateRangeCpn'

const SearchMobile = ({ searchMobile, setSearchMobile }) => {
    const [valueInput, setvalueInput] = useState('')
    const handleOnChange = (event) => {
        setvalueInput(event.target.value)
    }

    const handleClose = () => {
        setSearchMobile(false)
    }

    return (
        <SearchMobileStyled>
            <div className={searchMobile ? 'tf show' : ' tf'}>
                <div className="s--mobile-ctn">
                    <div className="search--t">
                        <div
                            className="back"
                            onClick={() => setSearchMobile(false)}
                        >
                            <IoIosArrowBack />
                        </div>
                        <div className="search--input">
                            <input
                                type="text"
                                placeholder="Bạn sẽ đi đâu?"
                                value={valueInput}
                                onChange={handleOnChange}
                            />
                        </div>
                    </div>
                    {valueInput && (
                        <div className="dr-st">
                            <DateRangeCpn
                                search={valueInput}
                                handleClose={handleClose}
                            />
                        </div>
                    )}
                </div>
            </div>
        </SearchMobileStyled>
    )
}

const opa = keyframes`
    from {
            opacity: 0;
        }
    to {
        opacity: 1;
    }
`

const SearchMobileStyled = styled.div`
    .tf {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: auto;
        background-color: white;
        transform: translateY(100%);
        transition: 0.3s ease;
        z-index: 1000;
        /* animation: ${opa} 0.3s ease; */
        &.show {
            transform: translateY(0);
        }
    }

    .s--mobile-ctn {
        position: relative;
        padding: 0 24px;
        .search--t {
            display: flex;
            padding-top: 50px;
            align-items: center;
            column-gap: 30px;
            .back {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 30px;
                height: 30px;
                font-size: 1.25rem;
                cursor: pointer;
                transition: 0.3s linear;
                border-radius: 50%;
                &:hover {
                    background-color: #f2f2f2;
                }
            }
            .search--input {
                flex: 1;
                text-align: left;
                input {
                    font-size: 1.25rem;
                    border: none;
                    outline: none;
                }
            }
        }
        .dr-st {
            position: absolute;
            top: 100px;
            left: 0;
            right: 0;
            @media screen and (max-width: 580px) {
                .btn-bottom {
                    padding: 12px 16px;
                }
            }
        }
    }
`

export default SearchMobile
