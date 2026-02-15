import { Route, Routes } from "react-router";
import Header from "./components/layout/Header";
import SketchPage from "./pages/SketchPage";
import { SKETCH_CATALOG_INFO } from "./constants/sketch-catalog-info";
import HomePage from "./pages/Home";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="sketch">
          {SKETCH_CATALOG_INFO.map((sketch) => (
            <Route
              key={sketch.path}
              path={sketch.path}
              element={<SketchPage sketch={sketch} />}
            />
          ))}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
