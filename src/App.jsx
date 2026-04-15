import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router';

import About from './views/About';
import Home from './views/Home';
import Layout from './components/Layout';
import Login from './views/Login';
import Profile from './views/Profile';
import Single from './views/Single';
import Upload from './views/Upload';
import Logout from './views/Logout';

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/single" element={<Single />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
