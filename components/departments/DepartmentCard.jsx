"use client"
export default function DepartmentCard({ department, onDelete, loading }) {
    return (
      <div className="p-4 bg-white rounded shadow">
        <h2 className="text-lg font-bold">{department.name}</h2>
        <div className="w-full h-fit flex items-center justify-between px-4">
          <p className="w-[45%] text-sm text-gray-600">Subdepartments:</p>
          <div className="w-[45%] h-fit">
            {
              department.subDepartments?.length > 0 && department.subDepartments?.map((item, index)=>(
                <p key={index} className="w-full text-sm font-medium text-gray-600">{item?.name}</p>
              ))
            }
          </div>
        </div>

        <button
          onClick={()=>onDelete(department?.id)}
          disabled={loading}
          className="mt-4 px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    );
  }