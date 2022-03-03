import { BrowserRouter, Route, Routes } from "react-router-dom";

import { paths } from "./constants/paths";
import { ThemeProvider } from "./providers/theme";

import { MainLayout } from "./layout/MainLayout/MainLayout";

//Pages
import { MainPage } from "./pages/MainPage/MainPage";
import { RulesPage } from "./pages/RulesPage/RulesPage";
import { FreeUkrainePage } from "./pages/FreeUkrainePage/FreeUkrainePage";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <MainLayout>
          <MainPage />
          {/* <Routes>
            <Route path={paths.main} element={} />
            <Route path={paths.rules} element={<RulesPage />} />
            <Route path={paths.free_ukraine} element={<FreeUkrainePage />} />
          </Routes> */}
        </MainLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
