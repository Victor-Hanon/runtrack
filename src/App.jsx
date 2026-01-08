import { useState } from 'react'

function App() {
  // Trois states pour nos trois informations
  const [distance, setDistance] = useState('')
  const [duree, setDuree] = useState('')
  const [date, setDate] = useState('')

  return (
    <div style={{ padding: '20px', maxWidth: '500px' }}>
      <h1>🏃 RunTrack</h1>
      
      <div style={{ marginBottom: '15px' }}>
        <label>Distance (km) : </label>
        <input 
          type="number" 
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Durée (minutes) : </label>
        <input 
          type="number" 
          value={duree}
          onChange={(e) => setDuree(e.target.value)}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Date : </label>
        <input 
          type="date" 
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div style={{ padding: '10px', background: '#f0f0f0', borderRadius: '5px' }}>
        <h3>Aperçu :</h3>
        <p>Distance : {distance} km</p>
        <p>Durée : {duree} min</p>
        <p>Date : {date}</p>
      </div>
    </div>
  )
}

export default App