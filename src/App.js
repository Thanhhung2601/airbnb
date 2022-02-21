import './App.css'
import Home from './containers/HomePage/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './containers/login/Login'
import SearchPage from './containers/searchPage/SearchPage'
import AccountPage from './containers/accountPage/AccountPage'

function App() {
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
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
