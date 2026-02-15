import { Route, Routes } from "react-router";
import P5Canvas from "./components/P5Canvas";
import { pineTree } from "./sketches/pineTree";
import Header from "./components/layout/Header";
import SketchPage from "./pages/SketchPage";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />

      <Routes>
        <Route index element={<h1>Home</h1>} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="sketch">
          <Route path="test" element={<P5Canvas />} />
          <Route
            path="pine-tree"
            element={<SketchPage sketchScript={pineTree} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
