import { useState } from 'react'
import './App.css'
import languages from './components/languages'

function App() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="container">
      <h1>Learn Web development</h1>

      <div className="buttons">
        {languages.map(lang => (
          <button
            key={lang.id}
            className={selected?.id === lang.id ? 'btn active' : 'btn'}
            onClick={() => setSelected(lang)}
          >
            {lang.title}
          </button>
        ))}
      </div>

      <div className="card">
        {selected ? (
          <>
            <h3>{selected.title}</h3>
            <p>{selected.description}</p>
          </>
        ) : (
          <p className="muted">Nessun linguaggio selezionato</p>
        )}
      </div>
    </div>
  )
}

export default App
