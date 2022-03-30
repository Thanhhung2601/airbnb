import React from 'react'
import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs'

const Search = ({ search, handleSearch, setSearch }) => {
    return (
        <SearchStyled>
            <div className="search">
                <div className="search-text">
                    <p className="title">Địa điểm</p>
                    <p className="sp">Bạn sắp đi đâu ?</p>
                </div>
                <div className="search-icon">
                    <input
                        type="text"
                        placeholder="Bắt đầu tìm kiếm"
                        value={search}
                        onChange={handleSearch}
                    />
                    <div className="icon">
                        <BsSearch />
                    </div>
                </div>
            </div>
        </SearchStyled>
    )
}

const SearchStyled = styled.div`
    .search {
        @media screen and (max-width: 830px) {
            display: none;
        }
        display: flex;
        background-color: white;
        max-width: 500px;
        margin: auto;
        padding: 12px 30px;
        justify-content: space-between;
        align-items: center;
        border-radius: 50px;
        flex-wrap: wrap;
        color: black;
        .search-text,
        .search-icon {
            flex-basis: 50%;
        }
        .search-text {
            border-right: 1px solid #e6e6e6;
        }
        .search-icon {
            display: flex;
            justify-content: space-between;
            padding-left: 20px;
            input {
                border: none;
                outline: none;
                font-size: 1.02rem;
                width: 150px;
            }
            .icon {
                padding: 13px 16px;
                background-color: #ff385c;
                color: white;
                border-radius: 50%;
                position: relative;
                left: 15px;
                cursor: pointer;
                transition: 0.3s ease;
                &:hover {
                    background: #dd0f62;
                }
            }
        }
        p {
            text-align: left;
        }
        .title {
            font-weight: 500;
            font-size: 0.9rem;
        }
        .sp {
            opacity: 0.7;
        }
    }
`

export default Search
