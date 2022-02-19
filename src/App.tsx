import { MainLayout } from "./layout/MainLayout/MainLayout";
import { ThemeProvider } from "./providers/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <MainLayout>
          <Routes>
            <Route path={"/"} element={<MainPage />} />
          </Routes>
        </MainLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
