import { Route, Routes } from "react-router-dom";
import "./App.css";
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
      </Routes>
    </div>
  );
}

export default App;
