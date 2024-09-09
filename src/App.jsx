// style
import "./App.css";

// fuctional and classes componnent
import Module from "./module";
import Etudiant from "./Etudiant";
import Users from "./users";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Navbar from "./navbar";

// to aplly routes functionality
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {


  const name = "mohamed";
  let note = 10;
  return (
    <>
    
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
    </Routes>
  </BrowserRouter>

      <header className="App">
        <h1>hello {name}</h1>
        <br />
        <h2>Votroe note est :{note}</h2>
        <h2>result {note >= 10 ? "Admis" : "Non Admis"} </h2> <br />
        <img width={"300px"} src="Live Share Chat.gif" alt="" /> <br />
        <img width={"30px"} src="logo512.png" alt="" />
      </header>

      <Module nome="module 1" coef="3" cat="web static" />
      <Module nome="module 2" coef="3" cat="android" />
      <Module nome="module 3" coef="3" cat="descktop" />
      <Module nome="module 4" coef="3" cat="ios" />

      <Etudiant />

      <Users />
    </>
  );
}
