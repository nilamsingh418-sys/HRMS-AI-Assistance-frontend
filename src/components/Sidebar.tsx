const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen">

      <div className="p-6">
        <h1 className="text-xl font-bold">
          HRMS
        </h1>

        <p className="text-gray-400 text-sm mt-1">
          AI Assistant
        </p>
      </div>

      <nav className="px-4 space-y-2">

        <button className="w-full text-left px-4 py-3 rounded-lg bg-gray-800">
          📊 Dashboard
        </button>

        <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-800">
          👥 Employees
        </button>

        <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-800">
          🕒 Attendance
        </button>

        <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-800">
          🏖️ Leave
        </button>

        <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-800">
          💰 Payroll
        </button>

      </nav>

    </aside>
  );
};

export default Sidebar;