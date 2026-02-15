import { NavLink, Route, Routes } from "react-router";
import P5Canvas from "./components/P5Canvas";

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul className="flex gap-2">
            <li>
              <NavLink to="/" className="p-1 bg-gray-300 rounded-sm">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="p-1 bg-gray-300 rounded-sm">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route index element={<h1>Home</h1>} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="sketches">
          <Route path="one" element={<P5Canvas />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
