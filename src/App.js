import {BrowserRouter as Router,Link,Routes,Route } from "react-router-dom";
import AboutUsComponent from "./components/Routes/AboutUsComponent/AboutUsComponent";
import ContactUsComponent from "./components/Routes/ContactUsComponent/ContactUsComponent";
import HomeComponent from "./components/Routes/HomeUsComponent/HomeComponent";
import Counter from "./components/Routes/CounterComponent/Counter";
import FormComponent from "./components/Routes/FormComponent/FormComponent";
import YoutubeClass from "./components/Routes/YoutubeClass/YoutubeClass";
import WelcomeFunctionComponent from "./components/Routes/WelcomeFunctionComponent/WelcomeFunctionalComponent";
import GreetClassComponent from "./components/Routes/GreetClassComponent/GreetClassComponent";
import "./App.css";
function App() {
  return (
    <Router>
    <div className="App">
      <nav className="navBar">
        <Link to="/home">Home</Link>
         <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
       <Link to="/Counter">Counter</Link>
        <Link to="/Form">React Form</Link>
        <Link to="/Youtube">Youtube</Link>
       <Link to="/WelcomeFunctionComponent">Welcomefunction</Link>
        <Link to="/GreetClassComponent">Greet class </Link>
        </nav>
      
      <Routes>
      <Route exact path='/Home' element={<HomeComponent/>}></Route>
       <Route exact path='/about' element={<AboutUsComponent/>}></Route>
       <Route exact path='/contact' element={<ContactUsComponent/>}></Route>
       <Route exact path='/Homecomponent' element={<HomeComponent/>}></Route>
       <Route exact path='/Counter' element={<Counter/>}></Route>
       <Route exact path='/Form' element={<FormComponent/>}></Route>
       <Route exact path='/Youtube' element={<YoutubeClass/>}></Route>
       <Route exact path='/WelcomeFunctionComponent'element={<WelcomeFunctionComponent name="sai babu" collegename="saveetha"/> }> </Route>
       <Route exact path='/GreetClassComponent' element={<GreetClassComponent name="sai babu"/>}></Route>
      </Routes>
      </div>
    </Router>

  );
}

export default App;
