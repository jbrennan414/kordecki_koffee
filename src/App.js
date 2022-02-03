import './App.css';
import CoffeeBeanDivider from './CoffeeBeanDivider';
import CoffeeWithConscience from './CoffeeWithConscience';
import LogoBar from './LogoBar';
import PromotionalBanner from './PromotionalBanner';
import WelcomeComponent from './WelcomeComponent';
import GlobalLocalCommunity from './GlobalLocalCommunity';
import ReliableConsistentTaste from './ReliableConsistentTaste';

function App() {
  return (
    <div className="App">
        <PromotionalBanner />
        <LogoBar />
        <WelcomeComponent />
        <CoffeeWithConscience />
        <CoffeeBeanDivider />
        <GlobalLocalCommunity />
        <ReliableConsistentTaste />
    </div>
  );
}

export default App;
