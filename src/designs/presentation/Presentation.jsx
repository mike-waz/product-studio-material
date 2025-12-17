// Presentation Design - Migrated from my-react-app
import PasswordGate from '../../components/PasswordGate';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  Hero,
  Section1StrategicContext,
  Section2TheSystem,
  Section3ForceMultiplication,
  Section4OperationalTransformation,
  Section5HowItWorks,
  Section6Implementation,
} from './components/sections';
import './Presentation.css';

function Presentation() {
  return (
    <PasswordGate correctPassword="lightspeed" storageKey="presentation-authenticated">
      <div className="presentation-app">
        <Header />
        <main className="main-content">
          <Hero />
          <Section1StrategicContext />
          <Section2TheSystem />
          <Section3ForceMultiplication />
          <Section4OperationalTransformation />
          <Section5HowItWorks />
          <Section6Implementation />
        </main>
        <Footer />
      </div>
    </PasswordGate>
  );
}

export default Presentation;
