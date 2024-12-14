"use client"
import React from 'react'


export default function TabManager({ activeTab, handleTabClick }) {

    return (
        <div className="flex h-[69px] w-full  items-center justify-between border-b bg-[#FFFFFF] px-4 py-2">
            <div className="flex space-x-7">
                <TabItem
                    tabName="Department Grid View"
                    isActive={activeTab === "grid"}
                    onClick={() => handleTabClick("grid")}
                />
                <TabItem
                    tabName="Department List View"
                    isActive={activeTab === "list"}
                    onClick={() => handleTabClick("list")}
                />
            </div>
            <div className="flex items-center space-x-4">
                {/* <button className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#F0F0F0] p-2">
                </button> */}
            </div>
        </div>
    )
}


const TabItem = ({ tabName, isActive, onClick }) => {
    return (
        <button
            className={`font-inter leading-loose focus:outline-none ${isActive ? "text-sm font-semibold text-[#25324B] " : "text-sm font-semibold text-[#7C8493] hover:text-gray-800"}`}
            onClick={onClick}
        >
            {tabName}
            {isActive && (
                <div className="h-[4px] rounded-tl-3xl rounded-tr-3xl bg-emerald-500"></div>
            )}
        </button>
    );
};



