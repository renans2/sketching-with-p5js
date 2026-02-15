import { Route, Routes } from "react-router";
import Header from "./components/layout/Header";
import SketchPage from "./pages/SketchPage";
import { SKETCH_ROUTES } from "./constants/sketch-routes";
import HomePage from "./pages/Home";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="sketch">
          {SKETCH_ROUTES.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <SketchPage
                  title={route.title}
                  sketchScript={route.sketchScript}
                />
              }
            />
          ))}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
