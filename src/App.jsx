import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import Books from "./components/books/books";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import "@fontsource/cinzel";
import "@fontsource/castoro-titling";

function App() {
  const [selection, setSelection] = useState("home");

  function clickHandler(clickedButton) {
    return () => {
      setSelection(clickedButton);
    };
  }

  const dataRender = {
    home: <Hero selection={selection} setSelection={clickHandler} />,
    books: <Books />,
    projects: <Projects />,
    contact: <Contact />,
  };

  return (
    <>
      <div className="page">
        <Navbar selection={selection} setSelection={clickHandler} />
        <div className="mainBody">{dataRender[selection]}</div>
        <Footer />
      </div>
    </>
  );
}

export default App;
