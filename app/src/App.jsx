import './App.css';
import Header from './components/Header' 
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import StatsSection from './components/StatsSection';
import ValuesSection from './components/ValuesSection';
const App = () => {

  return (
    <div className="App">
      <Header></Header>
      <HeroSection></HeroSection>
      <ValuesSection></ValuesSection>
      <StatsSection></StatsSection>
      <MissionSection></MissionSection>
    </div>
  )
}

export default App