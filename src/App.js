import './App.css'
import Home from './containers/HomePage/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './containers/login/Login'
import SearchPage from './containers/searchPage/SearchPage'
import AccountPage from './containers/accountPage/AccountPage'
import WishListsPage from './containers/wishListsPage/WishListsPage'
import { useSelector } from 'react-redux'
import { userSelector } from './feature/userSelector'
import { useEffect } from 'react'
import WishListPageDetail from './containers/wishListPageDetail/WishListPageDetail'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
    const user = useSelector(userSelector)

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/:slug" element={<SearchPage />}></Route>
                    <Route
                        path="/account-settings"
                        element={<AccountPage />}
                    ></Route>
                    <Route
                        path="/wishlists"
                        element={<WishListsPage />}
                    ></Route>
                    <Route
                        path="/wishlists/:id"
                        element={<WishListPageDetail />}
                    ></Route>
                </Routes>
            </BrowserRouter>
            <ToastContainer
                position="bottom-left"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
            />
        </div>
    )
}

export default App
