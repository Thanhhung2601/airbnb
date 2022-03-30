import React, { useState } from 'react'
import styled from 'styled-components'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { DateRangePicker } from 'react-date-range'
import { BsFillPeopleFill } from 'react-icons/bs'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const DateRangeCpn = ({ search, handleClose }) => {
    const [dateRange, setDateRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        numberOfGuests: 1,
    })

    const selectionRange = {
        startDate: dateRange.startDate,
        endDate: dateRange.endDate,
        key: 'selection',
    }
    const navigate = useNavigate()

    const handleChangeCalendar = (ranges) => {
        setDateRange({
            ...dateRange,
            startDate: ranges.selection.startDate,
            endDate: ranges.selection.endDate,
        })
    }

    const handleChangeGuests = (event) => {
        if (event.target.value) {
            setDateRange({
                ...dateRange,
                numberOfGuests: parseInt(event.target.value),
            })
        }
    }

    return (
        <DateRangeStyled>
            <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleChangeCalendar}
                minDate={new Date()}
                rangeColors={['#ff385c']}
            />
            <div className="number-of-guests">
                <div className="nbg-top">
                    <div className="text-left">
                        <h2>Number of Guests</h2>
                    </div>
                    <div className="people-right">
                        <div className="people-right__icon">
                            <BsFillPeopleFill />
                        </div>
                        <div className="people-right__ip">
                            <input
                                type="number"
                                value={dateRange.numberOfGuests}
                                onChange={handleChangeGuests}
                                min={0}
                            />
                        </div>
                    </div>
                </div>
                <div className="btn-bottom">
                    <div className="btn-bottom-cancel">
                        <Button
                            className="btn-cancel"
                            variant="outlined"
                            color="inherit"
                            onClick={handleClose}
                        >
                            Cancel
                        </Button>
                    </div>
                    <div className="btn-bottom-search">
                        <Button
                            className="btn-search"
                            variant="outlined"
                            color="inherit"
                            onClick={() => {
                                navigate(
                                    `/search?location=${search}&startDate=${dateRange.startDate}&endDate=${dateRange.endDate}&NumberofGuests=${dateRange.numberOfGuests}`
                                )
                            }}
                        >
                            Search
                        </Button>
                    </div>
                </div>
            </div>
        </DateRangeStyled>
    )
}

const DateRangeStyled = styled.div`
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
`

export default DateRangeCpn
