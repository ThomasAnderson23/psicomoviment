import './App.css';
//import Header from './components/Header';
import ResponsiveAppBar from './components/Header/Header';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './components/Footer/Footer';
import Jumbotron from './components/Jumbotron/Jumbotron';

const theme = createTheme({
  palette: {
    primary: { main: "#4a97d4", contrastText: "#ffffff"},
    
  },
});


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
      <Jumbotron />
      <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
