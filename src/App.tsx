import { MainLayout } from "./layout/MainLayout/MainLayout";
import { ThemeProvider } from "./providers/theme";

function App() {
  return (
    <ThemeProvider>
      <MainLayout></MainLayout>
    </ThemeProvider>
  );
}

export default App;
