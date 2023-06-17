import './App.css'
import Home from "./pages/Home.jsx";
import {Routes, Route} from "react-router-dom";
import Search from "./pages/Search.jsx";
import Plus from "./components/Plus.jsx";

function App() {

    return (
        <>
            <div className={'app-main'}>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/search'} element={<Search/>}/>
                </Routes>
            </div>
        </>
    )
}

export default App
