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
      <Navbar />
      <Header />
      <Featured />
      <About />
      <Services />
      <Footer />
    </>
  );
}

export default App;
