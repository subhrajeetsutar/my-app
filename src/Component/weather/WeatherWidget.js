import React from 'react'

export default function WeatherWidget({city, temp}) {
  return (
    <div>
      <h2>{city}</h2>
      <h2>{temp}</h2>
    </div>
  )
}
