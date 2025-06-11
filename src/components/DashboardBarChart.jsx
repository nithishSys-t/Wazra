'use client';

import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    Legend,
} from 'recharts';
import { Card, CardContent, Typography } from '@mui/material';

const DashboardBarChart = ({ data }) => {
    const chartData = [
        { name: 'Contacts', value: data.contacts },
        { name: 'Quotations', value: data.quotations },
        { name: 'Applications', value: data.applications },
        { name: 'Enrolls', value: data.enrolls },
    ];

    return (
        <Card sx={{ boxShadow: 3 }}>
            <CardContent>
                <Typography variant="subtitle1" gutterBottom>
                    Overall Metrics Overview
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

export default DashboardBarChart;
