import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import MainLayout from "./components/MainLayout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
