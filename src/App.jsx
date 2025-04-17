import './App.css';
import reactLogo from './assets/react.svg';
import ProfessionalCard from './components/ProfessionalCard';

function App() {
  const person1 = {
    name: 'Elliot Garamendi',
    age: 29,
    isAlive: true,
    roles: ['🌌Frontend🌌', '🤖AI Engineer🤖', '👨‍🏫Docente👨‍🏫'],
    skills: ['⚛️ React ⚛️', '🚀 Astro 🚀', '🖌️ Figma 🖌️', '🤖 OpenAI 🤖'],
    address: { country: '🇵🇪 Perú 🇵🇪', city: 'Lima' },
  };

  const person2 = {
    name: 'Mijael Garamendi',
    age: 2,
    isAlive: true,
    roles: ['🌌Frontend🌌', '🤖AI Engineer🤖', '👨‍🏫Docente👨‍🏫'],
    skills: ['⚛️ React ⚛️', '🚀 Astro 🚀', '🖌️ Figma 🖌️', '🤖 OpenAI 🤖'],
    address: { country: '🇵🇪 Perú 🇵🇪', city: 'Lima' },
  };

  return (
    <>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h1>React Foundation</h1>
      <ProfessionalCard name={person1.name} age={person1.age} isAlive={person1.isAlive} />
      <ProfessionalCard name={person2.name} age={person2.age} isAlive={person2.isAlive} />
    </>
  )
}

export default App
