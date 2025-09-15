import React from 'react'
import WeatherSoilCard from './WeatherSoilCard'
import VideoPanel from './VideoPanel'

export default function ResultPanel({ data }){
  const { disease, confidence, recommended, weather, soil, videos } = data

  return (
    <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold">Detection</h3>
        <p className="mt-2">Disease: <span className="font-medium">{disease}</span></p>
        <p>Confidence: {Math.round(confidence*100)}%</p>

        <div className="mt-4">
          <h4 className="font-semibold">Recommended Treatment</h4>
          <div className="mt-2 p-3 border rounded">
            <p className="font-medium">{recommended.name}</p>
            <p className="text-sm">Dosage: {recommended.dosage}</p>
            <p className="text-sm">Organic alternative: {recommended.organic || 'None'}</p>
            <div className="mt-3 flex gap-2">
              <button className="px-3 py-1 bg-emerald-600 text-white rounded">Buy Now — ₹{recommended.priceBefore}</button>
              <button className="px-3 py-1 bg-amber-500 text-white rounded">Buy with Subsidy — ₹{recommended.priceAfter}</button>
              <a className="px-3 py-1 bg-slate-200 rounded" href="#" onClick={e=>e.preventDefault()}>Download Invoice</a>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <VideoPanel videos={videos} />
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <WeatherSoilCard weather={weather} soil={soil} />
      </div>
    </div>
  )
}
