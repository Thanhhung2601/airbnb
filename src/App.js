import './App.css'
import Home from './containers/HomePage/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './containers/login/Login'
import { useSelector } from 'react-redux'
import { userSelector } from './feature/userSelector'

function App() {
    const user = useSelector(userSelector)
    console.log(user)

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
