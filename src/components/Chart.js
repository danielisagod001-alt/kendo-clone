'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', revenue: 4000, recordings: 2400 },
  { name: 'Feb', revenue: 3000, recordings: 1398 },
  { name: 'Mar', revenue: 5000, recordings: 9800 },
  { name: 'Apr', revenue: 4780, recordings: 3908 },
  { name: 'May', revenue: 5890, recordings: 4800 },
  { name: 'Jun', revenue: 4390, recordings: 3800 },
  { name: 'Jul', revenue: 5490, recordings: 4300 },
];

const Chart = () => {
  return (
    <div className="bg-card-bg p-6 rounded-lg shadow h-96">
      <h3 className="text-lg font-semibold text-text-dark mb-4">Performance</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis dataKey="name" tick={{ fill: '#6B7280' }} />
          <YAxis tick={{ fill: '#6B7280' }} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#FFFFFF',
              borderColor: '#E5E7EB'
            }}
          />
          <Legend />
          <Line type="monotone" dataKey="recordings" stroke="#6D31ED" strokeWidth={2} />
          <Line type="monotone" dataKey="revenue" stroke="#A78BFA" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
