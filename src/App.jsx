import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router";

import About from "./views/About";
import Home from "./views/Home";
import Layout from "./components/Layout";
import Login from "./views/Login";
import Logout from "./views/Logout";
import MyComponentA from "./components/MyComponentA";
import MyComponentB from "./components/MyComponentB";
import { MyProvider } from "./contexts/MyContext";
import Profile from "./views/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Single from "./views/Single";
import Upload from "./views/Upload";
import { UserProvider } from "./contexts/UserContext";

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <UserProvider>
        <MyProvider>
          <MyComponentA />
          <MyComponentB />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/upload"
                element={
                  <ProtectedRoute>
                    <Upload />
                  </ProtectedRoute>
                }
              />
              <Route path="/single" element={<Single />} />
            </Route>
          </Routes>
        </MyProvider>
      </UserProvider>
    </BrowserRouter>
  );
};
export default App;
