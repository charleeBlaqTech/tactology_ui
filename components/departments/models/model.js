"use client"
import { useState } from 'react';
import SubDepCard from '../SubDepCard';

export default function CreateDepartmentModal({ onClose, onCreate, token }) {
    const [error, setError] = useState(null)
    const [successMsg, setSuccessMsg] = useState(null)
    const [name, setName] = useState('');
    const [sub_depart, setSub_depart] = useState('');
    const [subDeptments, setSubDeptments] = useState([]);
    const [subDepartments, setSubDepartments] = useState([{
        name: ""
    }]);

    const handleSubmit = async () => {

        if (!name) {
            setError('Please add department name to continue.')
        } else {
            try {
                const apiBodyData = subDeptments?.length > 0 && subDeptments?.map((item, index) => {
                    return {
                        name: item
                    }
                })
                const newDept = {
                    name,
                    subDepartments: apiBodyData?.length > 0 ? apiBodyData : [],
                };

                const response = await fetch(`https://api-tactologyglobal-com.onrender.com/api/v1/departments/create`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(newDept),
                })
                if (response.status !== 201) {
                    setError('failed to create department')
                    return
                }
                const data = await response.json()
                console.log(data)
                setSuccessMsg('Department created successfully')
                await onCreate();
            } catch (error) {
                console.log(error)
                setError(error?.message || "Failed to create department, please contact admin")
            }
        }
    };


    const handleRemoveSubDepartment = (indexValue) => {
        const indexCondition = (index) => index !== indexValue;
        const updatedSubDeptsData = subDeptments?.filter((item, index) => {
            return indexCondition(index)
        })
        setSubDeptments(updatedSubDeptsData)
    }

    const handleInputChange = async (value) => {
        setSub_depart(value)
    };

    const addSubDept = () => {
        if (sub_depart) {
            setSubDeptments(prevd => ([
                ...prevd,
                sub_depart
            ]))
            setSub_depart("")
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="w-96 p-4 bg-white rounded shadow max-w-md">
                <h2 className="text-xl font-bold text-gray-800">Create Department</h2>
                <p className='w-full text-center text-[11px] text-red-600'>{error || ""}</p>
                <div className='w-full h-fit'>
                    <input
                        type="text"
                        value={name}
                        onFocus={() => setError(null)}
                        placeholder="Department name"
                        onChange={(e) => setName(e.target.value)}
                        className="w-full h-12 text-gray-800 mt-4 px-1 border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div className='w-full h-fit'>
                    <input
                        type="text"
                        value={sub_depart}
                        onFocus={() => setError(null)}
                        placeholder="Sub dept name"
                        onChange={(e) => handleInputChange(e.target.value)}
                        className="w-full h-12 text-gray-800 mt-4 px-1 border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="w-full h-3 mt-2 flex items-center justify-end">
                    <div className="flex items-center justify-center gap-1 cursor-pointer" onClick={() => addSubDept()}>
                        <span className="size-4 rounded-full text-[#FFF] bg-emerald-500 flex items-center justify-center">
                            +
                        </span>
                        <span className="text-[11px] text-[#10b981] font-semibold">Add sub dept</span>
                    </div>
                </div>
                <div className='w-full mt-2 px-2 grid grid-cols-1 gap-1'>
                    {
                        subDeptments?.map((item, index) => (
                            <SubDepCard key={index} removeSubDepartment={handleRemoveSubDepartment} index={index} text={item} />
                        ))
                    }
                </div>

                <div className='w-full px-4 py-2 mt-4 flex items-center justify-evenly'>
                    <button
                        onClick={() => onClose()}
                        className="w-[45%] px-4 py-2 text-gray-800 bg-[#f0eeee] rounded"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => handleSubmit()}
                        className="w-[45%] px-4 py-2  text-white bg-indigo-600 rounded hover:bg-indigo-700"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}