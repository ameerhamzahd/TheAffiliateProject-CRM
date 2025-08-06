"use client";

import React from 'react';
import StatBar from '../Components/StatBar';
import LeadTable from '../Components/LeadTable';

const page = () => {
    return (
        <section className="min-h-screen bg-linear-to-br from-black to-white">
                <div className="max-w-11/12 mx-auto py-15">
                    <StatBar />
                    <LeadTable />
                </div>
        </section>
    );
};

export default page;