export default function DataGrid() {
  const data = [
    { id: 1, name: "Product A", sales: 120, revenue: "$1,200", status: "In Stock" },
    { id: 2, name: "Product B", sales: 80, revenue: "$950", status: "In Stock" },
    { id: 3, name: "Product C", sales: 200, revenue: "$3,400", status: "Out of Stock" },
    { id: 4, name: "Product D", sales: 50, revenue: "$600", status: "In Stock" },
    { id: 5, name: "Product E", sales: 150, revenue: "$2,100", status: "In Stock" },
    { id: 6, name: "Product F", sales: 90, revenue: "$1,300", status: "Out of Stock" },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">Recent Sales</h3>
        <a href="#" className="text-blue-500 dark:text-blue-400 hover:underline">
          View All
        </a>
      </div>
      <table className="w-full text-left text-gray-900 dark:text-gray-200">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <th className="p-2">ID</th>
            <th className="p-2">Product Name</th>
            <th className="p-2">Sales</th>
            <th className="p-2">Revenue</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
              <td className="p-2">{item.id}</td>
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.sales}</td>
              <td className="p-2">{item.revenue}</td>
              <td className="p-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    item.status === "In Stock"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
