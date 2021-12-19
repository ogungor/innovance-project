import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import FormPage from "./components/FormPage/FormPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="formpage" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
