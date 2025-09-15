import React, { useState } from 'react'
import axios from 'axios'

export default function UploadCard({ onResult }){
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleUpload(e){
    e.preventDefault()
    if(!file) return alert('Select an image')
    setLoading(true)
    try{
      const form = new FormData();
      form.append('image', file)
      const res = await axios.post('/api/detect', form, { headers: { 'Content-Type': 'multipart/form-data' }})
      onResult(res.data)
    }catch(err){
      console.error(err)
      alert('Upload failed (mock). Check console for details.')
    }finally{ setLoading(false) }
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <form onSubmit={handleUpload} className="flex flex-col gap-3">
        <label className="text-sm font-medium">Upload leaf image (jpg/png)</label>
        <input type="file" accept="image/*" onChange={e=>setFile(e.target.files[0])} />
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-green-600 text-white rounded" disabled={loading}>{loading? 'Analyzing...':'Analyze'}</button>
          <button type="button" className="px-4 py-2 bg-slate-200 rounded" onClick={()=>{ setFile(null); onResult(null); }}>Reset</button>
        </div>
        <p className="text-xs text-slate-500">Demo: detection, weather, soil, fertilizer & buy flow are mocked.</p>
      </form>
    </div>
  )
}
