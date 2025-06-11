"use client";

import React, { useEffect, useState } from 'react'

const CustomDashboardPage = () => {
    const [count, setCount] = useState<number | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/contact-submit-count')
            const data = await res.json()
            setCount(data.count)
        }

        fetchData()
    }, [])

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Custom Admin Dashboard</h1>
            <p>Total Contact Submissions: {count !== null ? count : 'Loading...'}</p>
        </div>
    )
}

export default CustomDashboardPage
