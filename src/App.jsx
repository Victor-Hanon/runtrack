import { useState } from 'react'

function App() {
  // States pour le formulaire
  const [distance, setDistance] = useState('')
  const [duree, setDuree] = useState('')
  const [date, setDate] = useState('')

  // State pour stocker TOUTES les courses (un tableau !)
  const [courses, setCourses] = useState([])

  // Fonction appelée quand on clique sur "Enregistrer"
  const handleEnregistrer = () => {
    // On crée un objet avec les infos de la course
    const nouvelleCourse = {
      distance: distance,
      duree: duree,
      date: date
    }

    // On ajoute cette course au tableau
    setCourses([...courses, nouvelleCourse])

    // On vide les champs du formulaire
    setDistance('')
    setDuree('')
    setDate('')
  }
  const handleSupprimer = (indexASupprimer) => {
    const nouvellesCourses = courses.filter((course, index) => index !== indexASupprimer)
    setCourses(nouvellesCourses)
  }
  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <h1>🏃 RunTrack</h1>

      <h2>Ajouter une course</h2>

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

      <button onClick={handleEnregistrer}>
        Enregistrer la course
      </button>

      <hr />

      <h2>Mes courses ({courses.length})</h2>

      <ul>
        {courses.map((course, index) => (
          < li key={index} >
            {course.date} - {course.distance} km en {course.duree} min - Allure: {
              course.distance > 0 && course.duree > 0
                ? (course.duree / course.distance).toFixed(2) + " min/km"
                : "N/A"
            }
            <button onClick={() => handleSupprimer(index)}>🗑️</button>
          </li >
        ))}
      </ul>
    </div>
  )
}

export default App

