'use client';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F'];

export default function EnrollPieChart({ trainingCount }) {
    const enrollData = [
        { name: 'Enrolls', value: trainingCount },
        { name: 'goal', value: 100 - trainingCount },
    ];

    return (
        <ResponsiveContainer width="100%" height={200}>
            <PieChart>
                <Pie
                    data={enrollData}
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    fill="#8884d8"
                    dataKey="value"
                    label
                >
                    {enrollData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
}
