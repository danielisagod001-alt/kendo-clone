import DashboardCard from "../components/DashboardCard";
import Chart from "../components/Chart";
import DataGrid from "../components/DataGrid";
import Form from "../components/Form";
import { FiDollarSign, FiUsers, FiShoppingCart, FiTrendingUp } from "react-icons/fi";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <DashboardCard title="Sales" value="$12,345" icon={<FiDollarSign />} />
        <DashboardCard title="Users" value="1,234" icon={<FiUsers />} />
        <DashboardCard title="Orders" value="456" icon={<FiShoppingCart />} />
        <DashboardCard title="Revenue" value="$7,890" icon={<FiTrendingUp />} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <Chart />
        <DataGrid />
      </div>
      <Form />
    </div>
  );
}
