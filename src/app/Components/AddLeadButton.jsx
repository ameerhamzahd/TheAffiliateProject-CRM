'use client';

import React from 'react';

const AddLeadButton = () => {
    return (
        <div>
            <a className='text-xs md:text-[1rem] w-[125px] h-[45px] md:w-[155px] md:h-[50px] text-[#FFFFFF] border border-white rounded-[10px] flex items-center justify-center gap-[10px] font-sf-pro-display transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0px_4px_4px_0px_rgba(255,255,255,0.25),0px_-4px_4px_0px_rgba(255,255,255,0.25),4px_0px_4px_0px_rgba(255,255,255,0.25),-4px_0px_4px_0px_rgba(255,255,255,0.25)] cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none"><path d="M0.492569 7.3666C0.492569 6.92967 0.858164 6.56407 1.28618 6.56407H7.05544V0.80373C7.05544 0.375717 7.41211 0.0101223 7.84904 0.0101223C8.28597 0.0101223 8.65157 0.375717 8.65157 0.80373V6.56407H14.4119C14.8399 6.56407 15.2055 6.92967 15.2055 7.3666C15.2055 7.80353 14.8399 8.1602 14.4119 8.1602H8.65157V13.9295C8.65157 14.3575 8.28597 14.7231 7.84904 14.7231C7.41211 14.7231 7.05544 14.3575 7.05544 13.9295V8.1602H1.28618C0.858164 8.1602 0.492569 7.80353 0.492569 7.3666Z" fill="currentColor"></path></svg>
                <span>Add new lead</span>
            </a>
        </div>
    );
};

export default AddLeadButton;