import { useEffect, useState } from "react";
import api from "../services/api";

const Dashboard = () => {
    const [totalEmployees, setTotalEmployees] = useState(0);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {

      const response = await api.get("/api/hrms/dashboard");

      setTotalEmployees(
        response.data.data.totalEmployees
      );

    } catch (error) {

      console.error(
        "Failed to fetch dashboard data:",
        error
      );

    }
  };

  return (
    <div className="p-6">

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome back, Nilam 👋
        </h1>

        <p className="text-gray-500 mt-1">
          Here's what's happening in your HRMS today.
        </p>
      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

        <div className="bg-white rounded-xl p-5 shadow-sm">
          <p className="text-gray-500">
            Total Employees
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {totalEmployees}
          </h2>
        </div>


        <div className="bg-white rounded-xl p-5 shadow-sm">
          <p className="text-gray-500">
            Present Today
          </p>

          <h2 className="text-3xl font-bold mt-2">
            118
          </h2>
        </div>


        <div className="bg-white rounded-xl p-5 shadow-sm">
          <p className="text-gray-500">
            On Leave
          </p>

          <h2 className="text-3xl font-bold mt-2">
            7
          </h2>
        </div>


        <div className="bg-white rounded-xl p-5 shadow-sm">
          <p className="text-gray-500">
            Departments
          </p>

          <h2 className="text-3xl font-bold mt-2">
            8
          </h2>
        </div>

      </div>


      {/* Recent Activity */}

      <div className="mt-8 bg-white rounded-xl shadow-sm p-6">

        <h2 className="text-lg font-semibold">
          Recent HR Activity
        </h2>

        <div className="mt-4 space-y-4">

          <div className="flex justify-between border-b pb-3">
            <span>
              Rahul Sharma applied for leave
            </span>

            <span className="text-gray-400 text-sm">
              10 min ago
            </span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span>
              Priya Singh marked attendance
            </span>

            <span className="text-gray-400 text-sm">
              25 min ago
            </span>
          </div>

          <div className="flex justify-between">
            <span>
              Amit Kumar updated profile
            </span>

            <span className="text-gray-400 text-sm">
              1 hour ago
            </span>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;