import React from 'react'
import DepartmentCard from './DepartmentCard'

export default function DepartmentGridScreen({departments, setSelectedDept, loading}) {
  return (
      <div className='w-full h-screen'>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {departments?.length > 0 && departments.map((dept) => (
                  <DepartmentCard
                      key={dept.id}
                      department={dept}
                      loading={loading}
                      onDelete={() => setSelectedDept(dept.id)}
                  />
              ))}
          </div>
      </div>
  )
}
