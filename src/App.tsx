import Box from "@mui/joy/Box";
import CssBaseline from "@mui/joy/CssBaseline";
import { CssVarsProvider } from "@mui/joy/styles";
import './App.css';
import Layout from "./components/Layout";

function App() {
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box component="main" className="MainContent" sx={{ flex: 1 }}>
        <Layout />
      </Box>
    </CssVarsProvider>
  )
}

export default App
