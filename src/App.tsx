
// react-router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/home/Home";
import Coin from "./pages/coin-details/Coin";

// component
import { ThemeProvider } from "./components/theme-provider";


const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coins/:id" element={<Coin />} />
          </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
