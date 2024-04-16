import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import {Home} from "./views/Home/Home";

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
