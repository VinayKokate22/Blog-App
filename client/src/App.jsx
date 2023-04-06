import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Single from "./pages/single/Single";
import Setting from "./pages/settingpage/Setting";

function App() {
  const user = false;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/write" element={user ? <Write /> : <Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={user ? <Home /> : <Register />} />
      <Route path="/post/:postid" element={<Single />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
