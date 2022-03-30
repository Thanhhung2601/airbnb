import React from 'react'
import styled from 'styled-components'
import { GrClose } from 'react-icons/gr'
import { useDispatch } from 'react-redux'
import { userSlice } from '../../feature/userSlice'
import { useNavigate } from 'react-router-dom'

const TitlePopup = ({ edit, handleClose, wishListItem }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDeleteWishList = () => {
        dispatch(userSlice.actions.deleteWishList({ id: wishListItem.id }))
        navigate('/wishlists')
    }

    return (
        <TitleStyled>
            <div className="wl-popup-title">
                <h3>{edit ? 'Cài đặt' : 'Danh sách Yêu thích của bạn'}</h3>
                <div className="btn-close" onClick={() => handleClose(false)}>
                    <GrClose />
                </div>
                {edit && (
                    <div className="delete" onClick={handleDeleteWishList}>
                        Xóa
                    </div>
                )}
            </div>
        </TitleStyled>
    )
}

const TitleStyled = styled.div`
    .wl-popup-title {
        position: relative;
        padding: 22px 0;
        border-bottom: 1px solid #e6e6e6;
        h3 {
            font-weight: 500;
        }
        .btn-close {
            position: absolute;
            left: 20px;
            top: 50%;
            transform: translateY(-50%);
            padding: 8px 11px;
            border-radius: 50%;
            cursor: pointer;
            transition: 0.4s ease;
            &:hover {
                background-color: #f2f2f2;
            }
        }
        .delete {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            padding: 8px 12px;
            cursor: pointer;
            border-radius: 8px;
            transition: 0.4s ease;
            &:hover {
                background-color: #f2f2f2;
            }
        }
    }
`

export default TitlePopup
