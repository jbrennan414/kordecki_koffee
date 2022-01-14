import './App.css';
import CoffeeBeanDivider from './CoffeeBeanDivider';
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
        <CoffeeBeanDivider />
    </div>
  );
}

export default App;
