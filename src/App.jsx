import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ArrayVisualizer from "./components/array/ArrayVisualizer";
import LinkedListVisualizer from "./pages/LinkedListVisualizer"
import Github from './components/Github'
import Stacks from "./pages/Stacks";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/array-visualizer" element={<ArrayVisualizer />} />
        <Route path="/linked-list-visualizer" element={<LinkedListVisualizer />} />
        <Route path="/stacks" element={<Stacks />} />
      </Routes>
      <Github/>
    </Router>
  );
};

export default App;
