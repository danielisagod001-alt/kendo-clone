'use client'

import DashboardCard from '../components/DashboardCard'
import Chart from '../components/Chart'
import { FiUser, FiSettings, FiLogOut } from 'react-icons/fi'

const HomePage = () => {
  return (
    <div className="flex-1 p-8">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-text-dark">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <div className="relative group">
            <button className="flex items-center space-x-2">
              <img src="https://i.pravatar.cc/40" alt="User" className="w-10 h-10 rounded-full" />
              <span className="font-semibold text-text-dark">John Doe</span>
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-card-bg rounded-lg shadow-lg py-1 hidden group-hover:block">
              <a href="#" className="flex items-center px-4 py-2 text-sm text-text-light hover:bg-primary-light hover:text-text-dark">
                <FiUser className="mr-2" /> Profile
              </a>
              <a href="#" className="flex items-center px-4 py-2 text-sm text-text-light hover:bg-primary-light hover:text-text-dark">
                <FiSettings className="mr-2" /> Settings
              </a>
              <a href="#" className="flex items-center px-4 py-2 text-sm text-text-light hover:bg-primary-light hover:text-text-dark">
                <FiLogOut className="mr-2" /> Logout
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard icon="recordings" title="Recordings" value="1,250" />
        <DashboardCard icon="hours" title="Hours Recorded" value="5,820" />
        <DashboardCard icon="shared" title="Shared" value="38" />
        <DashboardCard icon="users" title="Users" value="12" />
      </div>

      <Chart />
    </div>
  )
}

export default HomePage
