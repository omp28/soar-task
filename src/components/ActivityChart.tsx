'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'

interface ActivityData {
  name: string
  withdraw: number
  deposit: number
}

interface ActivityChartProps {
  data: ActivityData[]
}

export default function ActivityChart({ data }: ActivityChartProps) {
  return (
    <div className="bg-white rounded-xl p-4">
      <h2 className="text-lg font-bold text-[#2B3674] mb-4">Weekly Activity</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="withdraw" fill="#2B3674" />
            <Bar dataKey="deposit" fill="#4318FF" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center mt-4 space-x-6">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#4318FF] mr-2" />
          <span className="text-sm text-gray-600">Deposit</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#2B3674] mr-2" />
          <span className="text-sm text-gray-600">Withdraw</span>
        </div>
      </div>
    </div>
  )
}