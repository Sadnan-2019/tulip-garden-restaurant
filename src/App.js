import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import Landing from './components/Landing/Landing';
import Foods from './components/Foods/Foods';
import FoodItem from './components/FoodItem/FoodItem';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className=" ">
          <Nav></Nav>
        <Landing></Landing>
        <Foods></Foods>
        <FoodItem></FoodItem>
        <Footer></Footer>
    </div>
  );
}

export default App;
