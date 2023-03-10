import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./Pages/Home";
import {Search} from "./Pages/Search";


function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/search/:query" element={<Search/>}/>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
