import logo from './logo.svg';
// import './App.css';
import Header from './componets/header.js';
import Footer from './componets/footer.js';
import Login from './views/pages/login/login';
// import Signup from './views/pages/signup/signup';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Login/>
      {/* <Signup/> */}
      <Footer/>
    </div>
  );
}

export default App;
