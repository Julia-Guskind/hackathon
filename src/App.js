import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar.js';
import About from './components/about/about.js';
import Rent from './components/rent/rent.js';
import Logo from './components/logo/logo.js';

function App() {
  return (
    <div>
    <Navbar></Navbar>
    
    <Logo></Logo>

    <About></About>

    <Rent></Rent>

    </div>


  );
}

export default App;


/*


<div className="App">
      hello
    </div>


<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

          Hello World
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

<html> 

</html>
*/