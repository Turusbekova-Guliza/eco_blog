import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Donate from "./pages/donate/Donate";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="donate" element={<Donate />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
