import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./store";
import TopBar from "./components/TopBar";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoris" element={<Favorites />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
