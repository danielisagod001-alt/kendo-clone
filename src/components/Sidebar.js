'use client'

import { useState } from 'react'
import { FiHome, FiClipboard, FiCheckSquare, FiUsers, FiSettings, FiHeadphones, FiGift } from 'react-icons/fi'

const Sidebar = () => {
  const [active, setActive] = useState('Home')

  const navItems = [
    { section: 'DASHBOARD', items: [
      { name: 'Home', icon: <FiHome />, href: '/' },
      { name: 'Recordings', icon: <FiClipboard />, href: '#' },
      { name: 'Tasks', icon: <FiCheckSquare />, href: '#' },
    ]},
    { section: 'TEAM', items: [
      { name: 'Members', icon: <FiUsers />, href: '#' },
      { name: 'Settings', icon: <FiSettings />, href: '#' },
    ]},
    { section: 'SYSTEM', items: [
      { name: 'Support', icon: <FiHeadphones />, href: '#' },
      { name: 'Rewards', icon: <FiGift />, href: '#' },
    ]},
  ]

  return (
    <div className="w-64 bg-card-bg h-screen p-6 flex flex-col">
      <div className="flex items-center mb-10">
        <div className="w-8 h-8 bg-primary rounded-full mr-3"></div>
        <span className="text-xl font-bold text-text-dark">My Team</span>
      </div>
      <nav className="flex flex-col">
        {navItems.map(section => (
          <div key={section.section} className="mb-6">
            <h3 className="text-text-light text-xs font-bold tracking-widest uppercase mb-4">{section.section}</h3>
            <ul>
              {section.items.map(item => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setActive(item.name)}
                    className={`flex items-center py-2 px-4 rounded-lg text-sm transition-colors ${
                      active === item.name
                        ? 'bg-primary text-white'
                        : 'text-text-light hover:bg-primary-light hover:text-text-dark'
                    }`}
                  >
                    <span className="mr-3 text-lg">{item.icon}</span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
      <div className="mt-auto p-4 bg-primary-light rounded-lg text-center">
        <p className="text-sm text-text-dark">Need help?</p>
        <a href="#" className="text-xs text-primary font-semibold">Go to support center</a>
      </div>
    </div>
  )
}

export default Sidebar
