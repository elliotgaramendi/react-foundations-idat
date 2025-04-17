import './App.css'
import reactLogo from './assets/react.svg'
import ProfessionalCard from './components/ProfessionalCard'

function App() {

  return (
    <>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h1>React Foundation</h1>
      <ProfessionalCard />
    </>
  )
}

export default App
