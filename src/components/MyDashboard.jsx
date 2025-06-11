'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid, CircularProgress } from '@mui/material';
import ContactsIcon from '@mui/icons-material/ContactMail';
import FormatQuoteIcon from '@mui/icons-material/RequestQuote';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import dynamic from 'next/dynamic';
import DashboardBarChart from './DashboardBarChart'

const EnrollPieChart = dynamic(() => import('@/components/EnrollPieChart'), { ssr: false });

const MetricCard = ({ title, icon: Icon, value, subtitle }) => (
    <Card sx={{ minWidth: 200, boxShadow: 3, borderLeft: '4px solid green' }}>
        <CardContent>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <Icon fontSize="large" />
                </Grid>
                <Grid item>
                    <Typography variant="subtitle2" color="textSecondary">
                        {title}
                    </Typography>
                    <Typography variant="h5">
                        {value !== null ? value : <CircularProgress size={20} />}
                    </Typography>
                    {subtitle && (
                        <Typography variant="caption" color="textSecondary">
                            {subtitle}
                        </Typography>
                    )}
                </Grid>
            </Grid>
        </CardContent>
    </Card>
);

const MyDashboard = () => {
    const [contactCount, setContactCount] = useState(null);
    const [quotationCount, setQuotationCount] = useState(null);
    const [applicationCount, setApplicationCount] = useState(null);
    const [iapplicationCount, setiapplicationCount] = useState(null);
    const [trainingCount, setTrainingCount] = useState(null);

    useEffect(() => {
        const fetchCounts = async () => {
            const endpoints = [
                { url: '/api/contact', setter: setContactCount },
                { url: '/api/quote', setter: setQuotationCount },
                { url: '/api/applications', setter: setApplicationCount },
                { url: './api/iapplications', setter: setiapplicationCount },
                { url: '/api/training', setter: setTrainingCount },
            ];

            for (const { url, setter } of endpoints) {
                try {
                    const res = await fetch(url);
                    const data = await res.json();
                    setter(data.totalDocs);
                } catch (err) {
                    console.error(`Error fetching data from ${url}:`, err);
                    setter(0);
                }
            }
        };

        fetchCounts();
    }, []);

    return (
        <Grid container spacing={7} sx={{ p: 3 }}>
            <Grid item xs={12} sm={6} md={4} lg={4}>
                <MetricCard title="Contacts" icon={ContactsIcon} value={contactCount} subtitle="Updated now" />
            </Grid>
            <Grid item xs={12} sm={6} md={2} lg={4}>
                <MetricCard title="Quotations" icon={FormatQuoteIcon} value={quotationCount} subtitle="Updated now" />
            </Grid>
            <Grid item xs={12} sm={6} md={2} lg={4}>
                <MetricCard title="Job Applications" icon={AssignmentIcon} value={applicationCount} subtitle="Updated now" />
            </Grid>
            <Grid item xs={12} sm={6} md={2} lg={4}>
                <MetricCard title="Intern Applications" icon={AssignmentIcon} value={iapplicationCount} subtitle="Updated now" />
            </Grid>
            <Grid item xs={12} sm={6} md={2} lg={4} style={{ width: '30%' }}>
                <Card sx={{ minWidth: 300, boxShadow: 3, p: 2 }}>
                    <Typography variant="h4" color="textSecondary">
                        Enrolls Overview
                    </Typography>
                    {trainingCount === null ? (
                        <CircularProgress size={30} />
                    ) : (
                        <EnrollPieChart trainingCount={trainingCount} />
                    )}
                </Card>
            </Grid >
            {contactCount !== null &&
                quotationCount !== null &&
                applicationCount !== null &&
                iapplicationCount !== null &&
                trainingCount !== null && (
                    <Grid item xs={12} style={{ width: '100%' }}>
                        <DashboardBarChart
                            data={{
                                contacts: contactCount,
                                quotations: quotationCount,
                                applications: applicationCount + iapplicationCount,
                                enrolls: trainingCount,
                            }}
                        />
                    </Grid>
                )}
        </Grid>
    );
};

export default MyDashboard;
