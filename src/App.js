import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import Landing from './components/Landing/Landing';
import Foods from './components/Foods/Foods';

function App() {
  return (
    <div className=" ">
          <Nav></Nav>
        <Landing></Landing>
        <Foods></Foods>
    </div>
  );
}

export default App;
