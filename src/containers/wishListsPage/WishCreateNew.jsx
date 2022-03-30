import React, { useState } from 'react'
import styled from 'styled-components'
import { TextField, Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { userSlice } from '../../feature/userSlice'
import { v4 as uuid4 } from 'uuid'
import { searchSlice } from '../../feature/searchSlice'
import { alpha, styled as styledMui } from '@mui/material/styles'
import { toast } from 'react-toastify'

const CusTomTextField = styledMui(TextField)({
    '& label.Mui-focused': {
        color: 'black',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'black',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'black',
        },
        '&:hover fieldset': {
            borderColor: 'black',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'black',
        },
    },
})

const WishCreateNew = (props) => {
    const { setShowpopup, edit, wishListItem, wish } = props

    const [nameValue, setNameValue] = useState(() =>
        wishListItem ? wishListItem.nameWishLists : ''
    )
    const dispatch = useDispatch()
    const handleOnChange = (event) => {
        setNameValue(event.target.value)
    }
    console.log(nameValue)

    const handleUpdateName = () => {
        dispatch(
            userSlice.actions.updateNameWishList({
                id: props.wishListItem.id,
                newName: nameValue,
            })
        )
        setShowpopup(false)
    }

    const handleAddWish = () => {
        const arrWishLists = []
        const objClone = { ...wish }
        objClone.liked = true
        arrWishLists.push(objClone)
        const dtPayload = {
            id: uuid4(),
            nameWishLists: nameValue,
            subWishLists: arrWishLists,
        }
        dispatch(userSlice.actions.createNewWishLists(dtPayload))
        dispatch(searchSlice.actions.likeWish(objClone))
        props.setShowPopup(false)
        toast(`❤️ Đã lưu vào danh sách Yêu Thích ${nameValue} của bạn`, {
            hideProgressBar: true,
        })
    }

    return (
        <WishCreateStyled>
            <div className="wl-create">
                <CusTomTextField
                    id="outlined-basic"
                    label="Tên"
                    variant="outlined"
                    fullWidth
                    value={nameValue}
                    onChange={handleOnChange}
                />
                <p>Tối đa 50 ký tự</p>
            </div>
            <div className="btn-create">
                <ButtonStyled
                    fullWidth
                    variant="contained"
                    disabled={nameValue ? false : true}
                    className={!nameValue && 'disabled'}
                    onClick={edit ? handleUpdateName : handleAddWish}
                >
                    {edit ? 'Lưu' : 'Tạo'}
                </ButtonStyled>
            </div>
        </WishCreateStyled>
    )
}

const WishCreateStyled = styled.div`
    .wl-create {
        padding: 30px 16px 40px 16px;

        p {
            text-align: left;
            font-size: 0.85rem;
            margin-top: 8px;
            opacity: 0.8;
        }
    }
    .btn-create {
        padding: 20px 26px;
        cursor: not-allowed;
        border-top: 1px solid #e6e6e6;
    }
`
const ButtonStyled = styled(Button)`
    background-color: black !important;
    color: white !important;
    text-transform: none !important;
    font-weight: 600 !important;
    font-size: 1.15rem !important;
    opacity: ${(props) => (props.className === 'disabled' ? 0.2 : '')};
`

export default WishCreateNew
