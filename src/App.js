import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Add from "./Components/Add";
import Update from "./Components/Update";

function App() {
  return (
    <div className="App">
      <div>
        <nav className="relative flex align-center justify-center px-2 py-2 bg-slate-500 mb-3 ">
          <a
            className=" text-2xl font-bold py-2 uppercase text-white"
            href="#./"
          >
            Daily Blogs
          </a>
        </nav>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Add />} />
            <Route path="/edit" element={<Update />} />
          </Routes>
        </Router>
        <footer class="p-4 bg-white rounded-lg item-center dark:bg-gray-800">
          <span class="text-sm text-gray-500 text-center dark:text-gray-400 hover:underline cursor-pointer">
            © 2022 DailyBlogs™ . All Rights Reserved.
          </span>
        </footer>
      </div>
    </div>
  );
}

export default App;
