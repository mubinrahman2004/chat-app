import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Group from "./components/Group";
import ErrorPage from "./pages/ErrorPage";
import { dbconfig } from "../firebaseConfig";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Registration/>}/>
          <Route path="/signin" element={<Login/>}/>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="/group" element={<Group />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
