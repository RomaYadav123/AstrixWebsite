import logo from "./logo.svg";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import FirstPage from "./components/FirstPage";
import TextItem from "./components/TextItem";
import SecondPage from "./components/SecondPage";
import CarouselPage from "./components/CarouselPage";
import CarouselSecond from "./components/CarouselSecond";
import CarouselSmall from "./components/CarouselSmall";

import ToggleButton from "./components/ToggleButton";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <FirstPage />
      <SecondPage />
      <ToggleButton />
      {/* <Router>
        <Routes>
          <Route path="/" element={<FirstPage />} />

          <Route path="/text" element={<TextItem />} />

          <Route path="/second" element={<SecondPage />} />

          <Route path="/carousel" element={<CarouselPage />} />
          <Route path="/carouseltwo" element={<CarouselSecond />} />
          <Route path="/carouselsmall" element={<CarouselSmall />} />

          <Route path="/toggle" element={<ToggleButton />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
