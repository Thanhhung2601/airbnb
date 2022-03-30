import React from 'react'
import styled from 'styled-components'
import { AiOutlinePlus } from 'react-icons/ai'
import { useState } from 'react'
import WishCreateNew from './WishCreateNew'
import { wishListSelector } from '../../feature/wishListSelector'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { userSlice } from '../../feature/userSlice'
import { searchSlice } from '../../feature/searchSlice'
import { toast } from 'react-toastify'
import TitlePopup from './TitlePopup'

const WishListPopup = ({ setShowPopup, wish }) => {
    const [createNew, setCreateNew] = useState(false)
    const wishLists = useSelector(wishListSelector)
    const dispatch = useDispatch()

    const handleCreateNew = () => {
        setCreateNew(true)
    }
    const handleClose = () => {
        createNew ? setCreateNew(false) : setShowPopup(false)
    }
    console.log('Popup', wishLists)

    const handleAddWish = (item) => {
        const newWish = { ...wish }
        newWish.liked = true
        dispatch(userSlice.actions.addSubWishLists({ item, newWish }))
        dispatch(searchSlice.actions.likeWish(newWish))
        setShowPopup(false)
        toast(
            `❤️ Đã lưu vào danh sách Yêu Thích ${item.nameWishLists} của bạn`,
            {
                hideProgressBar: true,
            }
        )
    }

    return (
        <WishListPopupStyled>
            <div className="wl-popup">
                <TitlePopup handleClose={handleClose} />
                {!createNew ? (
                    <div className="wl-bt">
                        <div className="create-new-wishlist">
                            <div className="btn-plus" onClick={handleCreateNew}>
                                <div className="ps">
                                    <AiOutlinePlus />
                                </div>
                            </div>
                            <div className="text">
                                <h3>Tạo danh sách mong muốn mới</h3>
                            </div>
                        </div>
                    </div>
                ) : (
                    <WishCreateNew wish={wish} setShowPopup={setShowPopup} />
                )}
                {!createNew &&
                    wishLists.map((item, index) => {
                        return (
                            <div
                                className="wl-item"
                                key={index}
                                onClick={() => handleAddWish(item)}
                            >
                                <div className="wl-item-image">
                                    <img
                                        src={
                                            item.subWishLists[0]
                                                ? item.subWishLists[0].img
                                                : 'https://img4.thuthuatphanmem.vn/uploads/2020/05/12/hinh-anh-xam-don-gian_103624444.jpg'
                                        }
                                        alt=""
                                    />
                                </div>
                                <div className="wl-item-name">
                                    <p>{item.nameWishLists}</p>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </WishListPopupStyled>
    )
}

const WishListPopupStyled = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 12px;
    z-index: 999;
    max-height: 500px;
    overflow: auto;
    background-color: white;
    .wl-popup {
        width: 568px;
        padding-bottom: 30px;

        .wl-bt {
            padding: 30px 16px 0 16px;
            .create-new-wishlist {
                display: flex;
                column-gap: 16px;
                align-items: center;
                .btn-plus {
                    cursor: pointer;
                    position: relative;
                    width: 62px;
                    height: 62px;
                    border: 1px solid #d9d9d9;
                    border-radius: 8px;
                    .ps {
                        display: flex;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        font-size: 1.8rem;
                    }
                }
                .text {
                    h3 {
                        font-weight: 500;
                    }
                }
            }
        }
        .wl-item {
            cursor: pointer;
            display: flex;
            column-gap: 16px;
            padding: 20px 16px 0 16px;
            .wl-item-image {
                width: 62px;
                height: 62px;
                img {
                    border-radius: 8px;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
    }
`

export default WishListPopup
