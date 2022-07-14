
import './App.css';
import Home from './components/Home/Home';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './components/Shop/Shop';

function App() {
  return (
  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="shop" element={<Shop />}></Route>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
