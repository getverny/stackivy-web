import './App.css';
import Discovery from './components/discovery';
import GetStarted from './components/getStarted';
import Hero from './components/hero';
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
    </div>
  );
}

export default App;