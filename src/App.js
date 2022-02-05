import './App.css';
import CoffeeBeanDivider from './CoffeeBeanDivider';
import CoffeeWithConscience from './CoffeeWithConscience';
import LogoBar from './LogoBar';
import PromotionalBanner from './PromotionalBanner';
import WelcomeComponent from './WelcomeComponent';
import GlobalLocalCommunity from './GlobalLocalCommunity';
import ReliableConsistentTaste from './ReliableConsistentTaste';
import BlackDivider from './BlackDivider';
import TwoPhotos from './TwoPhotos';
import LinkFooter from './LinkFooter';

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
      <BlackDivider />
      <TwoPhotos />
      <LinkFooter />
    </div>
  );
}

export default App;
