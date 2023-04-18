import './App.css';
import Discovery from './components/discovery';
import GetStarted from './components/getStarted';
import Goal from './components/goals';
import Hero from './components/hero';
import JoinStack from './components/joinStack';
import Learn from './components/learn';
import Navbar from './components/navBar';
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
    </div>
  );
}

export default App;
