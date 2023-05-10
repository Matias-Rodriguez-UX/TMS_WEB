import { useState } from "react";
import {
  About,
  Featured,
  Header,
  Navbar,
  Services,
  Footer,
} from "./components";
import "./App.scss";
import CustomCursor from "./CustomCursor";

function App() {
  return (
    <>
      <CustomCursor />
      <div className="main-container" id="main-container">
        <Navbar />
        <Header />
        {/* <Featured /> */}
        <About />
        <Services />
        <Footer />
      </div>
    </>
  );
}

export default App;
