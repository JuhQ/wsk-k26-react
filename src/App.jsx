import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router";

import About from "./views/About";
import Home from "./views/Home";
import Layout from "./components/Layout";
import Login from "./views/Login";
import Profile from "./views/Profile";
import Single from "./views/Single";
import Upload from "./views/Upload";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/single" element={<Single />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
