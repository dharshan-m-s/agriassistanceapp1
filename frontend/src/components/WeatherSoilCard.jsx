import React from 'react'

export default function WeatherSoilCard({ weather, soil }){
  return (
    <div>
      <h4 className="font-semibold">Weather & Soil</h4>
      <div className="mt-3 text-sm">
        <p>Temperature: {weather.temp}°C</p>
        <p>Humidity: {weather.humidity}%</p>
        <p>Rainfall (24h): {weather.rain} mm</p>
        <div className="mt-2 border-t pt-2">
          <p>Soil type: {soil.type}</p>
          <p>NDVI: {soil.ndvi}</p>
        </div>
      </div>
    </div>
  )
}
