import React, { useState, useEffect } from 'react'

const CurrentDay = () => {
  const [currentDay, setCurrentDay] = useState('')

  useEffect(() => {
    const daysOfWeek = [
      'domingo',
      'segunda-feira',
      'terça-feira',
      'quarta-feira',
      'quinta-feira',
      'sexta-feira',
      'sábado',
    ]
    setCurrentDay(daysOfWeek[new Date().getDay()])
  }, [])

  return (
    <div>
      <h2>Oi meu benzinho, hoje é {currentDay || 'Loading...'}!</h2>
    </div>
  )
}

export default CurrentDay
