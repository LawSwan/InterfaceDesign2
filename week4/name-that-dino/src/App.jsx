import { useEffect, useRef, useState } from 'react'
import { DINOS } from './dinos.jsx'
import './App.css'

function shuffle(array) {
  const copy = [...array]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

function speak(text) {
  if (!('speechSynthesis' in window)) return
  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.rate = 0.9
  utterance.pitch = 1.15
  window.speechSynthesis.speak(utterance)
}

function newRound() {
  const options = shuffle(DINOS)
  const target = options[Math.floor(Math.random() * options.length)]
  return { options, target }
}

function App() {
  const [round, setRound] = useState(newRound)
  const [stars, setStars] = useState(0)
  const [status, setStatus] = useState('playing') // 'playing' | 'correct'
  const [wrongId, setWrongId] = useState(null)
  const advanceTimer = useRef(null)

  useEffect(() => {
    speak(`Where is the ${round.target.name}?`)
    return () => clearTimeout(advanceTimer.current)
  }, [round])

  function handlePick(dino) {
    if (status !== 'playing') return

    if (dino.id === round.target.id) {
      setStatus('correct')
      setStars((s) => s + 1)
      speak(`Yes! That's the ${dino.name}!`)
      advanceTimer.current = setTimeout(() => {
        setStatus('playing')
        setRound(newRound())
      }, 1800)
    } else {
      setWrongId(dino.id)
      speak('Try again!')
      setTimeout(() => setWrongId(null), 500)
    }
  }

  function replayPrompt() {
    speak(`Where is the ${round.target.name}?`)
  }

  return (
    <div className="game">
      <header className="game-header">
        <h1>Name That Dino!</h1>
        <div className="stars" aria-label={`${stars} stars`}>
          {'⭐'.repeat(stars) || '☆'}
        </div>
      </header>

      <div className="prompt">
        <p>
          Where is the <strong>{round.target.name}</strong>?
        </p>
        <button className="replay-btn" onClick={replayPrompt} aria-label="Hear it again">
          🔊
        </button>
      </div>

      <div className="cards">
        {round.options.map((dino) => (
          <button
            key={dino.id}
            className={[
              'card',
              status === 'correct' && dino.id === round.target.id ? 'card--correct' : '',
              wrongId === dino.id ? 'card--wrong' : '',
            ]
              .filter(Boolean)
              .join(' ')}
            style={{ '--dino-color': dino.color }}
            onClick={() => handlePick(dino)}
          >
            <dino.Art className="card-art" />
            <span className="card-label">{dino.name}</span>
          </button>
        ))}
      </div>

      {status === 'correct' && <div className="celebration">🎉 Great job! 🎉</div>}
    </div>
  )
}

export default App
