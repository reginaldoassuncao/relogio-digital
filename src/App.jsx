import { useState } from 'react'
import Clock from './components/Clock'
import Stopwatch from './components/Stopwatch'
import './App.css'

function App() {
  const [view, setView] = useState('clock')

  return (
    <div className="container">
      <header>
        <h1>Minha Ferramenta de Tempo</h1>
        <nav>
          <button 
            className={view === 'clock' ? 'active' : ''} 
            onClick={() => setView('clock')}
          >
            Relógio
          </button>
          <button 
            className={view === 'stopwatch' ? 'active' : ''} 
            onClick={() => setView('stopwatch')}
          >
            Cronômetro
          </button>
        </nav>
      </header>

      <main>
        {view === 'clock' ? <Clock /> : <Stopwatch />}
      </main>

      <footer>
        <p>Desenvolvido para Reginaldo Assunção</p>
      </footer>
    </div>
  )
}

export default App
