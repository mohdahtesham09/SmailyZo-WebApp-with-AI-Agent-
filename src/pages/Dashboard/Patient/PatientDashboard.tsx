import { useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';

const PatientDashboard = () => {
    const { user } = useAuth();
    const [appointments] = useState([
        { id: 101, date: "2025-01-15", time: "10:00 AM", doctor: "Dr. Smaily", type: "Consultation", status: "Upcoming" }
    ]);

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">My Health Dashboard</h2>
            <p className="text-gray-600">Welcome, {user?.name}. Here are your upcoming visits.</p>

            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="text-lg font-medium text-gray-900">My Appointments</h3>
                    <button className="btn btn-primary text-sm py-2 px-4">Book New</button>
                </div>

                {appointments.length > 0 ? (
                    <div className="divide-y divide-gray-200">
                        {appointments.map((apt) => (
                            <div key={apt.id} className="p-6 flex items-center justify-between hover:bg-gray-50">
                                <div>
                                    <div className="text-lg font-semibold text-gray-900">{apt.type}</div>
                                    <div className="text-sm text-gray-500">with {apt.doctor}</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm font-medium text-gray-900">{apt.date} at {apt.time}</div>
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 mt-1">
                                        {apt.status}
                                    </span>
                                </div>
                                <div className="ml-4">
                                    <button className="text-red-500 hover:text-red-700 text-sm font-medium">Reschedule</button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="p-8 text-center text-gray-500">
                        No upcoming appointments.
                    </div>
                )}
            </div>
        </div>
    );
};

export default PatientDashboard;
