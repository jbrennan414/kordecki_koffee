import './App.css';
import CoffeeBeanDivider from './CoffeeBeanDivider';
import CoffeeWithConscience from './CoffeeWithConscience';
import LogoBar from './LogoBar';
import PromotionalBanner from './PromotionalBanner';
import WelcomeComponent from './WelcomeComponent';
import GlobalLocalCommunity from './GlobalLocalCommunity';
import BlackDivider from './BlackDivider';
import TwoPhotos from './TwoPhotos';
import LinkFooter from './LinkFooter';
import espresso_roasting from './assets/backgrounds/espresso_roasting.png';
import espresso_background from './assets/backgrounds/espresso_drip.png';

function App() {
  return (
    <div className="App">
      <PromotionalBanner />
      <LogoBar />
      <WelcomeComponent />
      <CoffeeWithConscience />
      <CoffeeBeanDivider />
      <GlobalLocalCommunity 
        text="GLOBAL & LOCAL COMMUNITY"
        image={espresso_background}
      />

      <GlobalLocalCommunity
        text="RELIABLE & CONSISTENT TASTE"
        image={espresso_roasting}
      />

      <BlackDivider />
      <TwoPhotos />
      <LinkFooter />
    </div>
  );
}

export default App;
