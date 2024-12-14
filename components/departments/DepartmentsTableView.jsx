"use client"
import React, {useEffect, useState} from 'react'
import { capitalizeString, getFirstLetters } from '../utils/helper';
import { PiArrowLeftBold, PiArrowRightBold, PiDotsThreeVerticalBold, PiPencilSimple, PiTrash, PiEyeLight, } from 'react-icons/pi'
import { BsSend } from "react-icons/bs";
import { IoDownloadOutline } from "react-icons/io5";
import { RxCounterClockwiseClock } from "react-icons/rx";


export default function DepartmentsTableView({data,currentPage, currentPageIndex, totalPages, onPageChange,}) {
    const [actionOpen, setActionOpen] = useState(null)

    const tableHeaders = [
        { key: "sn", label: "S/N", width: "2%" },
        { key: "name", label: "Name", width: "20%" },
        { key: "sub separtments", label: "Sub Departments", width: "20%" },
        { key: "action", label: "Action", width: "3%" },
    ];
    const openAction = (index) => {
        setActionOpen(index)
    }
    const closeAction = () => {
        setActionOpen(null)
    }

    const handlePageClick = (page) => {
        onPageChange(page);
    };

    useEffect(() => {
        if (actionOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [actionOpen]);

    return (
        <div className='overflow-x-auto bg-[#fff] rounded-[8px]'>
            <table className='border min-w-full min-h-screen'>
                <thead>
                    <tr className='h-[38px] bg-[#E7F5E7] text-[#333333] font-medium text-[11px] border-b'>
                        {tableHeaders?.map((header) => (
                            <th
                                key={header.key}
                                className="font-inter leading-[18px] h-full text-start pl-4"

                            >
                                {header.key === "sn" ? (
                                    'S/N'
                                ) : (
                                    header.label
                                )}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className=' bg-white'>
                    {
                        data?.length > 0 && data?.map((item, index) => (
                            <tr key={index} className='border-b h-[62px]'>
                                <td className='whitespace-nowrap px-4 py-4 '>
                                    {index + 1}
                                </td>

                                <td className='whitespace-nowrap px-4 text-[#575757] text-[13px] font-normal font-inter leading-tight '>
                                    {item?.name}
                                </td>
                                <td className='whitespace-nowrap px-4 text-[#575757] text-[13px] font-normal font-inter leading-tight '>
                                   <div className='h-full flex items-center gap-1'>
                                        {
                                            item?.subDepartments?.length > 0 && item?.subDepartments?.map((item, index) => (
                                                <p key={index}>{item?.name}</p>
                                            ))

                                        }
                                    </div>
                                </td>

                                <td className='whitespace-nowrap flex items-center justify-start cursor-pointer'>
                                    <div className='relative px-4 py-4 '>
                                        <span className={`${item?.status === 'overdue' ? 'text-[#740707a9] bg-[#bd6a6a88]' : item?.status === 'paid' ? 'text-[#2f7646f9] bg-[#a9eddcc1]' : item?.status === 'pending' ? 'text-[#c1aa28] bg-[#eeeb98]' : item?.status === 'draft' ? 'text-[#3F3F46] bg-[#b2b2bf]' : '#3F3F46'} w-fit h-[18px] px-[10px] py-[5px] rounded-[4px] flex items-center justify-center text-[12px] text-center font-semibold `}>
                                            {capitalizeString(item?.status)}
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
            <footer className='border-b min-w-full py-4'>
                <div className='flex items-center justify-between'>
                    <div className='w-[14%] flex items-center justify-start pl-4 text-start'>
                        <button className={`w-fit h-[27px] px-[10px] PY-[6px] flex items-center rounded-[8px] border border-[#D0D5DD]`} onClick={() => handlePageClick(currentPage - 1)}
                            disabled={currentPage === 1}>
                            <span className={`h-[18px] text-[10px] text-[#344054] font-[400px] flex items-center gap-[6px]`}>
                                <PiArrowLeftBold fontSize={13} />
                                <p className='text-[10px] font-[400px]'>Previous</p>
                            </span>
                        </button>
                    </div>
                    <div className='w-[65%] flex items-center justify-center text-center'>
                        <div className='w-fit h-[40px] flex items-center'>
                            {Array.from({ length: totalPages }, (_, index) => {
                                const pageNumber = index + 1;
                                return (
                                    <div key={pageNumber} className={`size-[40px] rounded-[8px] flex items-center justify-center ${currentPage === pageNumber ? 'active bg-[#FFF7F2]' : 'bg-[#FFFFFF]'} `} onClick={() => handlePageClick(pageNumber)}>
                                        <p className='w-[5px] h-[18px] text-[12px] text-[#333333]'> {pageNumber}</p>
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                    <div className='w-[14%] flex items-center justify-end pr-4 text-end'>
                        <button className={`w-fit h-[27px] px-[10px] PY-[6px] flex items-center rounded-[8px] border border-[#D0D5DD]`} onClick={() => handlePageClick(currentPage + 1)}
                            disabled={currentPage === totalPages}>
                            <span className={`h-[18px] text-[10px] text-[#344054] font-[400px] flex items-center gap-[6px]`}>
                                <p className='text-[10px] font-[400px]'>Next</p>
                                <PiArrowRightBold fontSize={13} />
                            </span>
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    )
}
