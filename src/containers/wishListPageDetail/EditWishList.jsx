import React from 'react'
import styled from 'styled-components'
import TitlePopup from '../wishListsPage/TitlePopup'
import WishCreateNew from '../wishListsPage/WishCreateNew'

const EditWishList = ({ handleClose, setShowpopup, wishListItem }) => {
    return (
        <EditStyled>
            <TitlePopup
                edit={'edit'}
                handleClose={handleClose}
                wishListItem={wishListItem}
            />
            <WishCreateNew
                edit={'edit'}
                setShowpopup={setShowpopup}
                wishListItem={wishListItem}
            />
        </EditStyled>
    )
}

const EditStyled = styled.div`
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    width: 400px;
    z-index: 999;
    border-radius: 8px;
`

export default EditWishList
