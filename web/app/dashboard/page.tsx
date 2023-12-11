// @/app/dashboard/page.tsx
'use client'

import React, { useState } from 'react';
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import CrudComponent from '@/app/components/CrudComponent';
import DashboardStats from '@/app/components/DashboardStats';

const Dashboard: React.FC = () => {
  const searchParams = useSearchParams()
  const statusParam = searchParams.get('status');
  const status = statusParam ? statusParam.toString() : null;

  // State for managing sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Nav Section */}
      <div className='flex flex-row p-5 top-0 sticky'>
        <Link href="/" className='left-0 hover:text-teal-500'>Lafia HMS</Link>
        {/* Hamburger Icon to toggle sidebar */}
        <div className="cursor-pointer ml-auto" onClick={toggleSidebar}>
          ☰ Menu
        </div>
        {/* Nav Menus */}
        <div className="ml-auto space-x-3">
          <Link href='/dashboard' className='hover:text-teal-500'>Dashboard</Link>
        </div>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="bg-teal-600/80 rounded-lg px-8 py-4 fixed right-0 top-0 h-fit ml-10">
          <div className='cursor-pointer block my-2 hover:text-black' onClick={toggleSidebar}>&times; Close</div>
          <Link href='/dashboard' className='block my-2 hover:text-black'>DashBoard</Link>
          <Link href='/dashboard?status=doctors' className='block my-2 hover:text-black'>Doctors</Link>
          <Link href='/dashboard?status=nurses' className='block my-2 hover:text-black'>Nurses</Link>
          <Link href='/dashboard?status=patients' className='block my-2 hover:text-black'>Patients</Link>
          <Link href='/dashboard?status=appointments' className='block my-2 hover:text-black'>Appointments</Link>
          <Link href='/dashboard?status=prescriptions' className='block my-2 hover:text-black'>Prescriptions</Link>
          <Link href='/dashboard?status=inventory' className='block my-2 hover:text-black'>Inventory</Link>
        </div>
      )}

      {/* Main Section */}
      <div>
        {status === null && (
          <DashboardStats />
        )}
        {status === "doctors" && (
          <CrudComponent endpoint="doctors" fields={["first_name", "last_name", "phone", "specialty", "about"]} />
        )}
        {status === "nurses" && (
          <CrudComponent endpoint="nurses" fields={["first_name", "last_name", "phone", "specialty", "about"]} />
        )}
        {status === "patients" && (
          <CrudComponent endpoint="patients" fields={["first_name", "last_name", "phone", "diagnosis"]} />
        )}
        {status === "appointments" && (
          <CrudComponent endpoint="appointments" fields={['date_and_time', 'notes', 'patient', 'doctor', 'status']} />
        )}
        {status === "prescriptions" && (
          <CrudComponent endpoint="prescriptions" fields={['patient', 'doctor', 'date_and_time', 'dosage', 'medications']} />
        )}
        {status === "inventory" && (
          <CrudComponent endpoint="inventory" fields={['item_name', 'quantity', 'unit_price']} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
