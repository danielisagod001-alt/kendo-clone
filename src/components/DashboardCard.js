import { FiVideo, FiClock, FiShare2, FiUser } from 'react-icons/fi'

const icons = {
  recordings: <FiVideo />,
  hours: <FiClock />,
  shared: <FiShare2 />,
  users: <FiUser />,
}

const DashboardCard = ({ icon, title, value }) => {
  return (
    <div className="bg-card-bg p-6 rounded-lg shadow flex items-center">
      <div className="bg-primary-light text-primary p-3 rounded-full mr-4 text-2xl">
        {icons[icon]}
      </div>
      <div>
        <p className="text-sm text-text-light">{title}</p>
        <p className="text-2xl font-bold text-text-dark">{value}</p>
      </div>
    </div>
  )
}

export default DashboardCard
