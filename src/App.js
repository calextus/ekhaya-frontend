import './App.css';
import Footer from './Footer/Footer.jsx';
import NavigationBar from './Navbar/Navbar.jsx';
import AuthPage from './PAGES/registiration/AuthPage';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <AuthPage /> 
      <Footer /> 
    </div>
  );
}

export default App;
