import './App.css';
//import Header from './components/Header';
import ResponsiveAppBar from './components/Header/Header';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './components/Footer/Footer';
import Jumbotron from './components/Jumbotron/Jumbotron';
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/Services/Services';
import Modalidades from './components/Modalidades/Modalidades';
import Principles from './components/Principles/Principles';
import Team from './components/Team/Team';
import Testimonies from './components/Testimonies/Testimonies';

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
        <AboutUs />
        <Services />
        <Modalidades />
        <Principles />
        <Team />
        <Testimonies />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
