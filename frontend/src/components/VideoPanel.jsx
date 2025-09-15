import React from 'react'

export default function VideoPanel({ videos=[] }){
  return (
    <div>
      <h4 className="font-semibold">How-to Videos</h4>
      <div className="mt-2 grid grid-cols-1 gap-3">
        {videos.map(v => (
          <div key={v.id} className="p-2 border rounded flex gap-3 items-start">
            <img src={v.thumbnail} alt="thumb" className="w-24 h-16 object-cover rounded" />
            <div>
              <a href={v.url} target="_blank" rel="noreferrer" className="font-medium">{v.title}</a>
              <p className="text-xs text-slate-500">{v.source}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
