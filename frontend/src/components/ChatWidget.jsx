import React, { useState } from 'react'

export default function ChatWidget(){
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'வணக்கம்! எப்படி உதவ வேண்டும்? (Demo chatbot)' }
  ])
  const [input, setInput] = useState('')

  function send(){
    if(!input) return
    setMessages(m => [...m, { from: 'me', text: input }])
    setInput('')
    setTimeout(()=> setMessages(m => [...m, { from: 'bot', text: 'சரி, அதை நான் நினைத்தேன் — (mock reply)' }]), 800)
  }

  return (
    <div className="relative">
      <button onClick={()=>setOpen(o=>!o)} className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-3 rounded-full shadow-lg">Chat</button>
      {open && (
        <div className="w-80 h-96 fixed bottom-20 right-6 bg-white border rounded shadow-lg flex flex-col overflow-hidden">
          <div className="p-2 border-b">Assistant</div>
          <div className="flex-1 p-2 overflow-auto scrollbar-hide">
            {messages.map((m,i)=> (
              <div key={i} className={m.from==='me'? 'text-right mb-2':'text-left mb-2'}>
                <div className={(m.from==='me'? 'inline-block bg-emerald-100 text-slate-800 p-2 rounded':'inline-block bg-slate-100 p-2 rounded')}>{m.text}</div>
              </div>
            ))}
          </div>
          <div className="p-2 border-t flex gap-2">
            <input className="flex-1 border rounded p-1" value={input} onChange={e=>setInput(e.target.value)} placeholder="Ask in Telugu/Tamil/etc" />
            <button onClick={send} className="px-3 py-1 bg-green-600 text-white rounded">Send</button>
          </div>
        </div>
      )}
    </div>
  )
}
