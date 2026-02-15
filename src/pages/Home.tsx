import { Link } from "react-router";
import { SKETCH_ROUTES } from "../constants/sketch-routes";
import usePageTitle from "../hooks/usePageTitle";

export default function HomePage() {
  usePageTitle("Sketching w/ p5.js");

  return (
    <main className="max-w-4xl w-full mx-auto p-2 space-y-2">
      <h2>Home</h2>
      <ul className="space-y-4">
        {SKETCH_ROUTES.map((route) => (
          <li key={route.path}>
            <Link
              className="bg-black font-bold p-2 text-white"
              to={`/sketch/${route.path}`}
            >
              {route.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
