import * as React from "react";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import RecentWork from "./components/RecentWork";
import Skills from "./components/Skills";

class App extends React.Component {
  public render() {
    return (
      <div>
        <Navbar />
        <Home />
        <RecentWork />
        <Skills />
        <Contact />
      </div>
    );
  }
}

export default App;
