import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import {Home} from "./views/Home/Home";
import style from '../src/views/countdown/App.module.scss';
import {Gallery} from "./views/Home/components/Gallery";


function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
            {/*<Route path="*" element={<NoPage />} />*/}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
