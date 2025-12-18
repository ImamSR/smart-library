'use client'
import React, { useEffect, useState } from 'react'

type Tab = {
  id: string
  title: string
  url: string
}

export default function TabView({ initialTabs = [] }: { initialTabs?: Tab[] }) {
  const [tabs, setTabs] = useState<Tab[]>(initialTabs ?? [])
  const [activeId, setActiveId] = useState<string | null>(
    initialTabs && initialTabs.length ? initialTabs[0].id : null,
  )

  // Merge new initialTabs into internal tabs when initialTabs prop changes.
  // This avoids remounting the component and lets parent add tabs dynamically.
  useEffect(() => {
    if (!initialTabs || initialTabs.length === 0) return

    setTabs((current) => {
      // add any incoming tabs that don't already exist (by url)
      const urls = new Set(current.map((t) => t.url))
      const toAdd = initialTabs.filter((t) => !urls.has(t.url))
      if (toAdd.length === 0) {
        // if no new tabs, optionally activate the first incoming tab
        if (!current.find((t) => t.id === activeId) && current.length > 0) {
          // keep active as is
        }
        return current
      }
      const merged = [...current, ...toAdd]
      // If no activeId set, activate the first of merged
      if (!activeId && merged.length) {
        setActiveId(merged[0].id)
      }
      return merged
    })

    // If no active tab, activate first incoming tab
    setActiveId((cur) => cur ?? (initialTabs[0] ? initialTabs[0].id : null))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialTabs.map((t) => t.url).join('|')]) // shallow dependency on urls only

  function openTab(tab: Tab) {
    setTabs((s) => {
      const exists = s.find((x) => x.url === tab.url)
      if (exists) {
        setActiveId(exists.id)
        return s
      }
      return [...s, tab]
    })
    setActiveId(tab.id)
  }

  function closeTab(id: string) {
    setTabs((s) => {
      const next = s.filter((t) => t.id !== id)
      // if active closed, select last
      if (activeId === id) {
        setActiveId(next.length ? next[next.length - 1].id : null)
      }
      return next
    })
  }

  return (
    <div className="tabview">
      <div className="tabhead" style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 8 }}>
        {tabs.map((t) => (
          <div
            key={t.id}
            onClick={() => setActiveId(t.id)}
            style={{
              padding: '6px 10px',
              borderRadius: 8,
              cursor: 'pointer',
              background: t.id === activeId ? 'rgba(0,0,0,0.08)' : 'transparent',
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
            className="select-none"
          >
            <span>{t.title}</span>
            <button
              aria-label="close"
              onClick={(e) => {
                e.stopPropagation()
                closeTab(t.id)
              }}
              style={{
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                paddingLeft: 6,
                paddingRight: 6,
              }}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="tabbody" style={{ height: '70vh', border: '1px solid #e5e7eb', borderRadius: 8, overflow: 'hidden' }}>
        {tabs.length === 0 && <div style={{ padding: 24 }}>Open a card to start browsing (tabs open inside an iframe).</div>}

        {tabs.map((t) => (
          <div key={t.id} style={{ display: t.id === activeId ? 'block' : 'none', width: '100%', height: '100%' }}>
            <iframe
              src={t.url}
              title={t.title}
              style={{ width: '100%', height: '100%', border: 0 }}
              sandbox="allow-scripts allow-forms allow-same-origin allow-popups"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
