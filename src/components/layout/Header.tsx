import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="bg-cyan-500">
      <div className="max-w-4xl mx-auto p-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Sketching w/ p5.js</h1>
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
      </div>
    </header>
  );
}
