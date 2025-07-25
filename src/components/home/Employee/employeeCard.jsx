import { FaUser, FaEye, FaEdit, FaTrash } from "react-icons/fa";
// import removed: employees from "./employees";
import { SiEmpirekred } from "react-icons/si";

export default function EmployeeCard({
  employees,
  setModelForm,
  setEditEmployee,
  handleDelete,
}) {

  // console.log('employee:', employee);
  return (
    <div className="mt-5">
      <table className="w-full text-sm text-center text-gray-700">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Employee</th>
            <th>Department</th>
            <th>Position</th>
            <th>Status</th>
            <th>Join Date</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(employees) && employees.length > 0 ? (
            employees.map((emp, idx) => (
              <tr key={emp._id || emp.id || idx} className="hover:bg-gray-50 divide-y divide-gray-100">
                <td className="flex items-center gap-3 px-4 py-2 text-left">
                  <FaUser className="text-gray-400" />
                  <div>
                    <div className="font-medium text-gray-900">{emp.name}</div>
                    <div className="text-gray-500 text-xs">{emp.email}</div>
                  </div>
                </td>
                <td>{emp.department}</td>
                <td>{emp.designation}</td>
                <td>
                  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                    {emp.userType}
                  </span>
                </td>
                <td>{emp.date}</td>
                <td>{emp.salary}</td>
                <td className="flex justify-center gap-3 text-gray-600">
                  <FaEye className="cursor-pointer hover:text-blue-500" />
                  <FaEdit 
                    onClick={() => {
                      setEditEmployee(emp);
                      setModelForm(true);
                    }}
                    className="cursor-pointer hover:text-green-500" />
                  <FaTrash 
                    onClick={() => handleDelete(emp.id)}
                    className="cursor-pointer hover:text-red-500" />
                    
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center py-4 text-gray-400">No employees found.</td>
            </tr>
          )}

        </tbody>
      </table>
    </div>
  );
}

