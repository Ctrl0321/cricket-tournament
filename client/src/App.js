import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import {Home} from "./views/Home/Home";
import style from '../src/views/countdown/App.module.scss';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            {/*<Route path="*" element={<NoPage />} />*/}
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
