import './App.css';
import Footer from './Footer/FOOTER.JSX';
import Navbar from './NAVBAR/NAVBAR.JSX';
import AuthPage from './PAGES/registiration/AuthPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AuthPage />
      <Footer /> 
    </div>
  );
}

export default App;
