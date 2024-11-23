'use client'

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const COLORS = ['#2B3674', '#4318FF', '#FF8F6B', '#000000']

interface ExpenseData {
  name: string
  value: number
}

interface ExpenseChartProps {
  data: ExpenseData[]
}

export default function ExpenseChart({ data }: ExpenseChartProps) {
  return (
    <div className="bg-white rounded-xl p-4">
      <h2 className="text-lg font-bold text-[#2B3674] mb-4">Expense Statistics</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center">
            <div
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            />
            <span className="text-sm text-gray-600">
              {item.name} ({item.value}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}