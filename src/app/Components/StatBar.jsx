'use client';

import React from 'react';
import Title from './Title';
import SummaryInfo from './SummaryInfo';
import AddLeadButton from './AddLeadButton';

const StatBar = () => {
    return (
        <div className='flex justify-between items-end'>
            <div>
                <Title></Title>
                <SummaryInfo></SummaryInfo>
            </div>

            <div>
                <AddLeadButton></AddLeadButton>
            </div>
        </div>
    );
};

export default StatBar;