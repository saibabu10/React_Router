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
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/Counter">Counter</Link>
        <Link to="/Form">React Form</Link>
        <Link to="/Youtube">Youtube</Link>
        <Link to="/WelcomeFunctionComponent">Welcome with function</Link>
        <Link to="/GreetClassComponent">Greet class </Link>
        </nav>
      <div><h1>Main Page</h1></div>
      <Routes>
       <Route exact path='/about' element={<AboutUsComponent/>}></Route>
       <Route exact path='/contact' element={<ContactUsComponent/>}></Route>
       <Route exact path='/Homecomponent' element={<HomeComponent/>}></Route>
       <Route exact path='/Counter' element={<Counter/>}></Route>
       <Route exact path='/FormComponent' element={<FormComponent/>}></Route>
       <Route exact path='/Youtube' element={<YoutubeClass/>}></Route>
       <Route exact path='/WelcomeFunction'
       element={<WelcomeFunctionComponent name="sai babu" college="saveetha"/> }>
        </Route>
       <Route exact path='/Greet class' element={<GreetClassComponent name="sai babu"/>}></Route>
      </Routes>
      </div>
    </Router>

  );
}

export default App;
