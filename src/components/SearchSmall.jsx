import React, { forwardRef, useEffect } from 'react'
import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'
import { searchSelector } from '../feature/searchSelector'
import { useSelector } from 'react-redux'

const SearchSmall = ({
    search,
    handleSearch,
    setSearch,
    searchSmallRef,
    category,
}) => {
    const stateSearch = useSelector(searchSelector)
    const valueRedux = `${stateSearch.location} | ${stateSearch.startDate} | ${stateSearch.endDate} | ${stateSearch.NumberofGuests}`
    console.log(stateSearch)
    useEffect(() => {
        searchSmallRef.current.focus()
    }, [])
    return (
        <SearchStyled category={category}>
            <div className="search-sm">
                <div className="search-sm-input">
                    <input
                        type="text"
                        placeholder={
                            stateSearch.location
                                ? valueRedux
                                : 'Bắt đầu tìm kiếm'
                        }
                        value={search}
                        onChange={handleSearch}
                        ref={searchSmallRef}
                    />
                </div>
                <div className="search-sm-icon">
                    <AiOutlineSearch />
                </div>
            </div>
        </SearchStyled>
    )
}

const SearchStyled = styled.div`
    display: ${(props) => (props.category === 'hiddenSearch' ? 'none' : '')};
    .search-sm {
        display: flex;
        margin: auto;
        align-items: center;
        justify-content: space-between;
        width: 300px;
        padding: 8px 16px;
        background-color: white;
        border-radius: 30px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        transition: 0.3s ease;
        &:hover {
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }
        input {
            border: none;
            outline: none;
            font-weight: 700;
            font-size: 0.9rem;
            padding: 4px 0;
        }
        .search-sm-input,
        .search-sm-icon {
            display: flex;
            color: black;
        }
        .search-sm-input {
            width: 100%;
            input {
                width: 100%;
            }
        }
        .search-sm-icon {
            padding: 8px;
            background-color: #ff385c;
            color: white;
            border-radius: 50%;
            position: relative;
            left: 8px;
        }
    }
`

export default SearchSmall
