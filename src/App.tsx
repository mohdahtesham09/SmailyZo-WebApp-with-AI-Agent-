import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Landing from './pages/Landing';
import Login from './pages/Login';
import DashboardLayout from './pages/Dashboard/Layout';
import DoctorDashboard from './pages/Dashboard/Doctor/DoctorDashboard';
import StaffDashboard from './pages/Dashboard/Staff/StaffDashboard';
import PatientDashboard from './pages/Dashboard/Patient/PatientDashboard';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />

          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="doctor" element={<DoctorDashboard />} />
            <Route path="staff" element={<StaffDashboard />} />
            <Route path="patient" element={<PatientDashboard />} />
            {/* Auto redirect based on role could go here, for now default */}
            <Route index element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
