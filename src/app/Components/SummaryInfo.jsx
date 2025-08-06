"use client";

import React from 'react';

const SummaryInfo = () => {
    return (
        <div className='text-[#FFFFFF] flex flex-wrap'>
            <p className='border-gray-500 border-r-2 pr-2 mr-2'><span className='font-sf opacity-65'>Total leads:</span> <span className='font-sf font-semibold'>45</span></p>
            <p className='border-gray-500 border-r-2 pr-2 mr-2'><span className='font-sf opacity-65'>Uncontacted:</span> <span className='font-sf font-semibold'>20</span></p>
            <p className='border-gray-500 border-r-2 pr-2 mr-2'><span className='font-sf opacity-65'>Hot leads:</span> <span className='font-sf font-semibold'>10</span></p>
            <p><span className='font-sf opacity-65'>This week:</span> <span className='font-sf font-semibold'>8</span></p>
        </div>
    );
};

export default SummaryInfo;