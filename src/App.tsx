import { MainLayout } from "./layout/MainLayout/MainLayout";
import { ThemeProvider } from "./providers/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { RulesPage } from "./pages/RulesPage/RulesPage";
import { paths } from "./constants/paths";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <MainLayout>
          <Routes>
            <Route path={paths.main} element={<MainPage />} />
            <Route path={paths.rules} element={<RulesPage />} />
          </Routes>
        </MainLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
