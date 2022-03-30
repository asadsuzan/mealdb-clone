import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Fotter from "./components/Fotter/Fotter";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Recipe from "./components/Recipe/Recipe";

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/recipe/:id" element={<Recipe></Recipe>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
      <Fotter />
    </div>
  );
}

export default App;
