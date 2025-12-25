import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const DashboardLayout = () => {
    const { user, logout, loading } = useAuth();

    if (loading) return <div>Loading...</div>;
    if (!user) return <Navigate to="/login" replace />;

    return (
        <div className="dashboard-layout flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-lg z-10">
                <div className="h-16 flex items-center justify-center border-b">
                    <span className="text-xl font-bold text-blue-600">SmailyZo Panel</span>
                </div>
                <nav className="p-4 space-y-2">
                    {user.role === 'doctor' && (
                        <>
                            <div className="font-semibold text-gray-500 text-xs uppercase mb-2">Doctor</div>
                            <a href="/dashboard/doctor" className="block py-2 px-4 rounded hover:bg-blue-50 text-gray-700 hover:text-blue-600">Overview</a>
                            <a href="/dashboard/doctor/calendar" className="block py-2 px-4 rounded hover:bg-blue-50 text-gray-700 hover:text-blue-600">Calendar</a>
                        </>
                    )}
                    {user.role === 'staff' && (
                        <>
                            <div className="font-semibold text-gray-500 text-xs uppercase mb-2">Front Desk</div>
                            <a href="/dashboard/staff" className="block py-2 px-4 rounded hover:bg-blue-50 text-gray-700 hover:text-blue-600">Overview</a>
                            <a href="/dashboard/staff/leads" className="block py-2 px-4 rounded hover:bg-blue-50 text-gray-700 hover:text-blue-600">leads</a>
                        </>
                    )}
                    {user.role === 'patient' && (
                        <>
                            <div className="font-semibold text-gray-500 text-xs uppercase mb-2">My Health</div>
                            <a href="/dashboard/patient" className="block py-2 px-4 rounded hover:bg-blue-50 text-gray-700 hover:text-blue-600">My Appointments</a>
                        </>
                    )}
                </nav>
                <div className="absolute bottom-0 w-64 p-4 border-t bg-gray-50">
                    <div className="flex items-center mb-4">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold">
                            {user.name.charAt(0)}
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">{user.name}</p>
                            <p className="text-xs text-gray-500 capitalize">{user.role}</p>
                        </div>
                    </div>
                    <button onClick={logout} className="w-full py-2 px-4 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50">
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="h-16 bg-white shadow-sm flex items-center justify-between px-8">
                    <h1 className="text-xl font-semibold text-gray-800">
                        Dashboard
                    </h1>
                </header>
                <main className="flex-1 overflow-y-auto p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
