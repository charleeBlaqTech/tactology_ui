import React from 'react'
import { FaTimes } from 'react-icons/fa'

export default function SubDepCard({removeSubDepartment, text, index}) {
    return (
        <div className='min-h-[30px] h-fit min-w-32 w-fit p-1 flex items-center rounded-[4px] bg-[#f0eeee]'>
            <div className='w-full flex items-center justify-between gap-1'>
                <div className='w-full h-[26px] flex items-center'>
                    <p className='w-full break-words text-center text-[14px] font-normal text-[#575757]'>{text}</p>
                </div>
                <div className='w-[20px] h-[20px] flex items-center cursor-pointer' onClick={() => removeSubDepartment(index)}>
                    <FaTimes size={15} color='#575757' />
                </div>
            </div>
        </div>
    )
}
