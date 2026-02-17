import { Link, NavLink, useLocation } from "react-router";

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className="bg-white text-black">
      <div className="max-w-500 mx-auto p-4 flex items-center justify-between">
        <Link to="/">
          <h1 className="text-2xl font-bold">Sketching w/ p5.js</h1>
        </Link>
        <nav>
          <ul className="flex gap-2">
            {pathname !== "/" && (
              <li>
                <NavLink to="/" className="font-medium">
                  Sketches
                </NavLink>
              </li>
            )}
            {pathname !== "/about" && (
              <li>
                <NavLink to="/about" className="font-medium">
                  About
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
