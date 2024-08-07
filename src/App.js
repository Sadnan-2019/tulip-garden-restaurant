import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import Landing from './components/Landing/Landing';
import Foods from './components/Foods/Foods';
import FoodItem from './components/FoodItem/FoodItem';
import Footer from './components/Footer/Footer';
import Video from './components/Video/Video';

function App() {
  return (
    <div className=" ">
          <Nav></Nav>
        <Landing></Landing>
        <FoodItem></FoodItem>
        <Foods></Foods>
        <Video></Video>
       
        <Footer></Footer>
    </div>
  );
}

export default App;
