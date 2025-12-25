import { useState } from 'react';

const StaffDashboard = () => {
    const [confirmations] = useState([
        { id: 1, name: "Alice Johnson", time: "10:00 AM", phone: "(555) 123-4567", status: "Pending" },
        { id: 2, name: "Michael Smith", time: "11:30 AM", phone: "(555) 987-6543", status: "Confirmed" },
        { id: 3, name: "Elena Rodriguez", time: "02:00 PM", phone: "(555) 456-7890", status: "Pending" }
    ]);

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Front Desk Operations</h2>

            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
                    <h3 className="text-lg font-medium text-gray-900">Appointment Confirmations (Today)</h3>
                </div>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {confirmations.map((item) => (
                            <tr key={item.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.time}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.phone}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button className="text-blue-600 hover:text-blue-900 mr-4">Call</button>
                                    <button className="text-green-600 hover:text-green-900">Confirm</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StaffDashboard;
