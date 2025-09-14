import React, { useState } from 'react'
import UploadCard from './components/UploadCard'
import ResultPanel from './components/ResultPanel'
import ChatWidget from './components/ChatWidget'

export default function App(){
  const [result, setResult] = useState(null)

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <main className="flex-1 p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Smart Agri Assistant — Demo</h1>
        <UploadCard onResult={setResult} />
        {result && <ResultPanel data={result} />}
      </main>

      <aside className="w-full lg:w-96 p-4 border-l bg-white/60">
        <div className="sticky top-4">
          <h2 className="font-semibold mb-3">Assistant</h2>
          <p className="text-sm text-slate-600 mb-4">Voice & chat in local language (mock)</p>
          <ChatWidget />
        </div>
      </aside>
    </div>
  )
}
