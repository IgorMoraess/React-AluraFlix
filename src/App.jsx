import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Home from "./components/pages/Home";
import NewVideo from "./components/pages/NewVideo";
import EstilosGlobais from "./components/EstilosGlobais";
import Footer from "./components/pages/Footer";

function App() {
  return (
    <BrowserRouter>
      <EstilosGlobais />
      <NavBar />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/newvideo" element={<NewVideo />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;