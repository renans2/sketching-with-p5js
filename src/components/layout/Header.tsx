import { Link, NavLink, useLocation } from "react-router";

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className="bg-black text-white">
      <div className="max-w-4xl mx-auto p-4 flex items-center justify-between">
        <Link to="/">
          <h1 className="text-2xl font-bold">Sketching w/ p5.js</h1>
        </Link>
        <nav>
          <ul className="flex gap-2">
            <li>
              {pathname !== "/" && (
                <NavLink to="/" className="p-1 rounded-sm">
                  Home
                </NavLink>
              )}
            </li>
            <li>
              <NavLink to="/about" className="p-1 rounded-sm">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
