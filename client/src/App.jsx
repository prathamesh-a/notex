import Nav from "./components/Nav.jsx";
import {useState} from "react";
import EditorBlock from "./components/EditorBlock.jsx";
import Footer from "./components/Footer.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFound from "./components/NotFound.jsx";
import About from "./components/About.jsx";
import NoteBlock from "./components/NoteBlock.jsx";
import {ToastContainer} from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import Loader from "./components/Loader.jsx";
function App() {

    const [theme, setTheme] = useState('dark')
    const [data, setData] = useState("")
    const [loading, setLoading] = useState(false)

    return (
        <div className={theme}>
            {loading && <Loader/>}
            <div className={`dark:bg-[#403d39] bg-[#d8f3dc]`}>
                <ToastContainer/>
                <BrowserRouter>
                    <Nav theme={theme} setTheme={setTheme}/>
                    <Routes>
                        <Route path='/' element={<EditorBlock setLoading={setLoading} theme={theme} data={data} setData={setData} />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/:id' element={<NoteBlock setLoading={setLoading} theme={theme}/>}/>
                        <Route path='/error' element={<NotFound type="Note"/>} />
                        <Route path='*' element={<NotFound type="Page"/>} />
                    </Routes>
                </BrowserRouter>

                <Footer/>
            </div>
        </div>

    )
}

export default App
