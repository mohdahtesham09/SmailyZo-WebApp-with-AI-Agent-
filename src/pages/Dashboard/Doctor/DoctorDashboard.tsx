import { useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';

const DoctorDashboard = () => {
    const { user } = useAuth();
    const [stats] = useState({
        todayAppointments: 4,
        pendingLeads: 12,
        revenue: '$3,240'
    });

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">Welcome back, {user?.name}</h2>
                <span className="text-sm text-gray-500">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="text-gray-500 text-sm font-medium uppercase">Today's Appointments</div>
                    <div className="mt-2 text-3xl font-bold text-blue-600">{stats.todayAppointments}</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="text-gray-500 text-sm font-medium uppercase">Pending Leads</div>
                    <div className="mt-2 text-3xl font-bold text-orange-500">{stats.pendingLeads}</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="text-gray-500 text-sm font-medium uppercase">Revenue (Month)</div>
                    <div className="mt-2 text-3xl font-bold text-green-600">{stats.revenue}</div>
                </div>
            </div>

            {/* Calendar Placeholder */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-96 flex items-center justify-center bg-gray-50">
                <p className="text-gray-400">Calendar Widget Integration Coming Soon</p>
            </div>
        </div>
    );
};

export default DoctorDashboard;
