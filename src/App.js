import './App.css';
import CoffeeWithConscience from './CoffeeWithConscience';
import LogoBar from './LogoBar';
import PromotionalBanner from './PromotionalBanner';
import WelcomeComponent from './WelcomeComponent';

function App() {
  return (
    <div className="App">
        <PromotionalBanner />
        <LogoBar />
        <WelcomeComponent />
        <CoffeeWithConscience />
    </div>
  );
}

export default App;
