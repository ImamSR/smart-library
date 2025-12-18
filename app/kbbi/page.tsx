'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function QuranPage() {
  const router = useRouter()

  // The ONLY iframe source; clicking menu buttons will change it.
  const [iframeUrl, setIframeUrl] = useState('https://kbbi.kemdikbud.go.id/')

  return (
    <div style={{ padding: 24 }}>
      {/* BACK BUTTON */}
      <button
        onClick={() => router.push('/')}
        className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-black dark:text-white transition"
      >
        <span className="material-symbols-outlined">arrow_back</span>
        Kembali
      </button>

      {/* IFRAMED CONTENT */}
      <div className="w-full h-[70vh] border rounded-lg overflow-hidden">
        <iframe
          key={iframeUrl}  // forces reload when URL changes
          src={iframeUrl}
          style={{ width: '100%', height: '100%', border: 0 }}
          sandbox="allow-scripts allow-forms allow-same-origin allow-popups"
        />
      </div>
    </div>
  )
}


