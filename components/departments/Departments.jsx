"use client"
import React, { useState, useEffect } from 'react';
import CreateDepartmentModal from './models/model';
import DepartmentsTableView from './DepartmentsTableView';
import DepartmentGridScreen from './DepartmentGridScreen';
import { useSearchParams } from 'next/navigation';
import TabManager from '../utils/TabManager';
import { useRouter } from 'next/navigation';



export default function Departments({ token }) {
  const navigate = useRouter()
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "grid";
  const [departments, setDepartments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newDept, setNewDept] = useState({ name: '', subDepartments: [] });
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageIndex, setCurrentPageIndex] = useState(1)
  const itemsPerPage = 10;
  const [totalCount, setTotalCount] = useState(0);
  const totalPages = Math.ceil(totalCount / itemsPerPage);
  const [searchResult, setSearchResult] = useState([])
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)
  const [selectedDeptId, setSelectedDeptId] = useState(null)


  const handleTabClick = (tab) => {
    navigate.push(`?tab=${tab}`);
  };


  const fetchDepartments = async () => {
    // Fetch departments from API with token
    try {
      setLoading(true)
      const response = await fetch(`https://api-tactologyglobal-com.onrender.com/api/v1/departments/find`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      const data = await response.json()
      if (response.status !== 200) {
        setLoading(false)
        setError(data?.message || data?.error)
      } else {
        setDepartments(data)
        setLoading(false)
        return
      }
    } catch (error) {
      setLoading(null)
      setError(error.message || "Failed to fetch Departments, please contact admin")
    }
  };


  const handleDelete = async (id) => {
    // Logic to delete department
      if (!id) return 
      try {
        setLoading(true)
        const response = await fetch(`https://api-tactologyglobal-com.onrender.com/api/v1/departments/${id}/delete`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        })
        const data = await response.json()
        if (response.status !== 200) {
          setLoading(false)
          setError(data?.message || data?.error)
        } else {
          fetchDepartments()
          setLoading(false)
          return
        }
      } catch (error) {
        setLoading(null)
        setError(error.message || "Failed to fetch Departments, please contact admin")
      }
  };

  const handleCreate = async () => {
    await fetchDepartments()
    setShowModal(false);
   
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "grid":
        return <DepartmentGridScreen departments={departments} setSelectedDept={setSelectedDeptId} loading={loading} />
      case "list":
        return <DepartmentsTableView data={departments} />
      default:
        return null;
    }
  };

  useEffect(()=>{
    handleDelete(selectedDeptId)
  },[selectedDeptId])

  return (
    <div className="bg-gray-50 min-h-screen">
      <TabManager activeTab={activeTab} handleTabClick={handleTabClick} />
      <div className="px-6 mt-2 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Departments</h1>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 text-white bg-emerald-500 rounded hover:bg-emerald-600"
        >
          Add Department
        </button>
      </div>

      <div className="w-full px-6 py-4 mt-6 h-screen">
        {renderContent()}
      </div>

      {showModal && (
        <CreateDepartmentModal onClose={() => setShowModal(false)} onCreate={handleCreate} token={token} />
      )}
    </div>
  );
}