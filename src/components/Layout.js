'use client'

import Sidebar from './Sidebar'

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-main-bg">
      <Sidebar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}
