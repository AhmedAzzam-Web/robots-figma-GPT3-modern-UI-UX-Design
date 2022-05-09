import "./App.css";

import { Brand, CTA, Navbar, Footer } from "./components/index";
import {
  Header,
  Blog,
  Features,
  Possibility,
  WhatGPT3,
} from "./containers/index";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}

export default App;
