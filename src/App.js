import './App.css';
import Discovery from './components/discovery';
import Footer from './components/footer';
import GetStarted from './components/getStarted';
import Goal from './components/goals';
import Hero from './components/hero';
import JoinStack from './components/joinStack';
import Learn from './components/learn';
import Navbar from './components/navBar';
import Partners from './components/partners';
import Unlocked from './components/unlock';


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <GetStarted/>
      <Discovery/>
      <Learn/>
      <Unlocked/>
      <Goal/>
      <JoinStack/>
      <Partners/>
      <Footer/>
    </div>
  );
}

export default App;
