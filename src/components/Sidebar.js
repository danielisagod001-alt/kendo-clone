import { FiGrid, FiBarChart2, FiCheckSquare } from "react-icons/fi";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">KendoClone</h2>
      <nav>
        <ul>
          <li className="mb-2">
            <a href="#" className="flex items-center p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
              <FiGrid className="mr-3" />
              Dashboard
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
              <FiBarChart2 className="mr-3" />
              Charts
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
              <FiCheckSquare className="mr-3" />
              Forms
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
