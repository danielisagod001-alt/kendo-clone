export default function DashboardCard({ title, value, icon }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <div className="mr-4 text-2xl text-gray-600 dark:text-gray-300">{icon}</div>
      <div>
        <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">{title}</h3>
        <p className="text-2xl font-bold text-gray-800 dark:text-white">{value}</p>
      </div>
    </div>
  );
}
