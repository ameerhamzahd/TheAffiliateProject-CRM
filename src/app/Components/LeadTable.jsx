'use client';

import React, { useState } from 'react';
import { Flex, Box, Select, Button, DropdownMenu } from "@radix-ui/themes";
import { FiMoreVertical } from "react-icons/fi";

const leads = [
    { name: "John Carter", contact: "j.carter@gmail.com", status: "New lead", interest: "High", source: "LinkedIn DMs", lastFollowUp: "2 days ago" },
    { name: "Alex Radi", contact: "alexrafi@gmail.com", status: "Cold lead", interest: "Low", source: "Direct message", lastFollowUp: "5 hours ago" },
    { name: "Tania Chowdhury", contact: "+8801712345657", status: "Contacted", interest: "Medium", source: "Facebook Ads", lastFollowUp: "Today" },
    { name: "Samir Hasan", contact: "sammyh@gmail.com", status: "Hot lead", interest: "Very high", source: "Webinar funnel", lastFollowUp: "1 day ago" },
];

const statusColors = {
    "New lead": "var(--color-newlead)",
    "Cold lead": "var(--color-coldlead)",
    "Hot lead": "var(--color-hotlead)",
    "Contacted": "var(--color-contacted)",
};

const interestColors = {
    High: "var(--color-high)",
    "Very high": "var(--color-veryhigh)",
    Medium: "var(--color-medium)",
    Low: "var(--color-low)",
};

const DropdownSelect = ({ options, selected, onChange, colorMap }) => {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <Button
                    color="gray" highContrast
                    style={{ color: colorMap[selected] }}
                >
                    {selected}
                    <DropdownMenu.TriggerIcon />
                </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content color="gray" highContrast
                className="bg-black text-sm min-w-[140px] font-sf shadow-md rounded-md"
            >
                {options.map((option) => (
                    <DropdownMenu.Item
                        key={option}
                        onClick={() => onChange(option)}
                        className="cursor-pointer px-2 py-1 hover:bg-white font-sf"
                        style={{ color: colorMap[option] }}
                    >
                        {option}
                    </DropdownMenu.Item>
                ))}
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    );
};


const LeadTable = () => {
    const [leadStates, setLeadStates] = useState(leads);

    const updateLead = (index, key, value) => {
        const updated = [...leadStates];
        updated[index][key] = value;
        setLeadStates(updated);
    };

    return (
        <Box className="rounded-[35px] overflow-hidden shadow-md text-white backdrop-blur mt-5 p-3">
            <Flex justify="between" className="px-4 py-3 border-b border-white/10">
                <Flex align="center">
                    <svg className="pr-2 border-r-2 border-gray-500" width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.7153 22L17.6519 16.9365" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M11.0479 19.6666C16.2027 19.6666 20.3815 15.4879 20.3815 10.3331C20.3815 5.17829 16.2027 0.999512 11.0479 0.999512C5.89313 0.999512 1.71436 5.17829 1.71436 10.3331C1.71436 15.4879 5.89313 19.6666 11.0479 19.6666Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg className="pl-2" width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.7153 3.05157C22.7153 2.33352 22.7153 1.97449 22.571 1.7001C22.4455 1.45904 22.2452 1.26291 21.9987 1.13976C21.7178 1 21.3503 1 20.6153 1H3.81533C3.08033 1 2.71283 1 2.43196 1.13976C2.18501 1.26269 1.98423 1.45884 1.85839 1.7001C1.71533 1.97449 1.71533 2.33352 1.71533 3.05157V3.99657C1.71533 4.31071 1.71533 4.46715 1.75208 4.6146C1.78422 4.74588 1.83738 4.87137 1.90958 4.98645C1.98964 5.11467 2.10383 5.22622 2.32958 5.44805L8.97477 11.9387C9.20183 12.1605 9.31602 12.2721 9.39608 12.4003C9.46871 12.5165 9.52121 12.6405 9.55358 12.7721C9.59033 12.9183 9.59033 13.0735 9.59033 13.3799V19.4782C9.59033 20.5771 9.59033 21.1271 9.82658 21.458C9.92908 21.601 10.0604 21.7221 10.2125 21.8139C10.3647 21.9056 10.5343 21.966 10.7112 21.9914C11.1194 22.0503 11.6234 21.8054 12.6288 21.3131L13.6788 20.8002C14.1014 20.595 14.3114 20.4924 14.465 20.3386C14.6012 20.2027 14.7047 20.0389 14.7681 19.859C14.8403 19.6564 14.8403 19.4256 14.8403 18.9653V13.3902C14.8403 13.076 14.8403 12.9196 14.8771 12.7721C14.9092 12.6409 14.9624 12.5154 15.0346 12.4003C15.1133 12.2721 15.2275 12.1618 15.4506 11.9438L15.4559 11.9387L22.1011 5.44805C22.3268 5.22622 22.4397 5.11467 22.5211 4.98645C22.5937 4.87019 22.6462 4.74624 22.6786 4.6146C22.7153 4.46971 22.7153 4.31328 22.7153 4.00683V3.05157Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Flex>
                <a href="#" className="text-white text-sm border border-b-4 border-r-4 border-white rounded-none px-2 py-1 bg-transparent font-sf">Sort By: <span className="font-semibold font-sf">Newest first</span></a>
            </Flex>

            <div className="w-full overflow-x-auto">
                <table className="min-w-[800px] w-full text-sm font-sf">
                    <thead>
                        <tr className="text-left text-white/60 border-b border-white/10">
                            {["Lead name", "Contact info", "Status", "Interest level", "Source", "Last follow-up", "Action"].map((col, i) => (
                                <th key={i} className="px-4 py-2 font-sf">{col}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {leadStates.map((lead, i) => (
                            <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition">
                                <td className="px-4 py-3 font-medium text-white font-sf">{lead.name}</td>
                                <td className="px-4 py-3 font-sf">{lead.contact}</td>
                                <td className="px-4 py-3">
                                    <DropdownSelect
                                        options={Object.keys(statusColors)}
                                        selected={lead.status}
                                        onChange={(value) => updateLead(i, 'status', value)}
                                        colorMap={statusColors}
                                    />
                                </td>
                                <td className="px-4 py-3">
                                    <DropdownSelect
                                        options={Object.keys(interestColors)}
                                        selected={lead.interest}
                                        onChange={(value) => updateLead(i, 'interest', value)}
                                        colorMap={interestColors}
                                    />
                                </td>
                                <td className="px-4 py-3 font-sf">
                                    <DropdownMenu.Root>
                                        <DropdownMenu.Trigger>
                                            <Button color="gray" highContrast>
                                                {lead.source}
                                                <DropdownMenu.TriggerIcon />
                                            </Button>
                                        </DropdownMenu.Trigger>
                                        <DropdownMenu.Content color="gray" highContrast>
                                            <DropdownMenu.Item value="LinkedIn DMs">LinkedIn DMs</DropdownMenu.Item>
                                            <DropdownMenu.Item value="Direct message">Direct message</DropdownMenu.Item>
                                            <DropdownMenu.Item value="Facebook Ads">Facebook Ads</DropdownMenu.Item>
                                            <DropdownMenu.Item value="Webinar funnel">Webinar funnel</DropdownMenu.Item>
                                        </DropdownMenu.Content>
                                    </DropdownMenu.Root>
                                </td>
                                <td className="px-4 py-3 font-sf">{lead.lastFollowUp}</td>
                                <td className="px-4 py-3">
                                    <DropdownMenu.Root>
                                        <DropdownMenu.Trigger>
                                            <Button variant="ghost" color="gray" size="1">
                                                <FiMoreVertical />
                                            </Button>
                                        </DropdownMenu.Trigger>
                                        <DropdownMenu.Content color="white" highContrast>
                                            <DropdownMenu.Item>Edit</DropdownMenu.Item>
                                            <DropdownMenu.Item>Delete</DropdownMenu.Item>
                                        </DropdownMenu.Content>
                                    </DropdownMenu.Root>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex items-center justify-between px-4 py-3 text-white/60 text-xs border-t border-white/10">
                <span>Leads per page: <b className="text-white">08</b></span>
                <div className="flex gap-2">
                    {[1, 2, 3, 4, '...', 9].map((n, i) => (
                        <button key={i} className={`w-6 h-6 rounded text-white hover:bg-white/10 transition ${n === 1 ? 'bg-white/20' : ''}`}>{n}</button>
                    ))}
                </div>
            </div>
        </Box>
    );
};

export default LeadTable;
