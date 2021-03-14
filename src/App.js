import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar.js';
import About from './components/about/about.js';
import Rent from './components/rent/rent.js';
import Logo from './components/logo/logo.js';
import BikeMap from './components/bikemap/bikemap.js';
import FAQ from './components/FAQ/FAQ.js';
import Foo from './components/FAQ/foo.js';



function App() {
  return (
    <div>

    <Navbar></Navbar>
    
    <About></About>
      
    <Foo></Foo>

    <BikeMap></BikeMap>

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