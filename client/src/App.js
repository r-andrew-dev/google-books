import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs.js";
import Save from "./components/pages/Save";
import Search from "./components/pages/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Header />
        <Route exact path="/save" component={Save} />
        <Route exact path="/" component={Search} />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
