import logo from './logo.svg';
//import './App.css';
import './styles/_global.scss'
import Home from './component/Home';
import Menu from './component/Menu';
import Footer from './component/Footer';

function App() {
  return (
  <html lang="en">
    <head>
    </head>
    <body>
      <Menu/>
      <Home/>
      <Footer/>
    </body>
  </html>
  );
}

export default App;
