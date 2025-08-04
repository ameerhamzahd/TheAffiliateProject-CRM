"use client";

import React from 'react';
import Header from '../Components/Header';
import StatBar from '../Components/StatBar';
import LeadTable from '../Components/LeadTable';

const page = () => {
    return (
        <section className="min-h-screen bg-black">
                <div className="max-w-11/12 mx-auto py-15">
                    <Header />
                    <StatBar />
                    <LeadTable />
                </div>
        </section>
    );
};

export default page;