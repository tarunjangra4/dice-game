import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router";
import SignUp from "./components/SignUp";
import { useSelector } from "react-redux";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  const user = useSelector((store) => store.user);
  const token = user?.token ?? localStorage.getItem("token");

  console.log("token ", token);

  return (
    <div className="h-[100vh] bg-blue-100">
      {token ? (
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
