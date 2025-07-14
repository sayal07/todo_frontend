import Home from "./components/home";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import { BrowserRouter,
          Routes,
          Route,
          Navigate
 } from "react-router";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login/" element={<Login/>} />
        <Route path="dashboard/" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
