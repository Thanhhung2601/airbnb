import './App.css'
import Home from './containers/HomePage/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './containers/login/Login'
import SearchPage from './containers/searchPage/SearchPage'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/:slug" element={<SearchPage />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
