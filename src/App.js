import { Routes, Route } from "react-router-dom";
import Index from "./container/Home";
import About from "./components/About";
import Service from "./components/Service";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
    </Routes>
  );
}

export default App;
