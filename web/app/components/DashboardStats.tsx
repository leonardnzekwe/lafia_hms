// @/app/components/DashboardStats.tsx

import React, { useEffect, useState, useCallback } from 'react';
import apiService from '@/app/components/apiService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserMd, faUserNurse, faUserInjured,
  faCalendarAlt, faBox, faFilePrescription
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'

const iconMap: Record<string, JSX.Element> = {
  doctors: <FontAwesomeIcon icon={faUserMd} />,
  nurses: <FontAwesomeIcon icon={faUserNurse} />,
  patients: <FontAwesomeIcon icon={faUserInjured} />,
  appointments: <FontAwesomeIcon icon={faCalendarAlt} />,
  prescriptions: <FontAwesomeIcon icon={faFilePrescription} />,
  inventory: <FontAwesomeIcon icon={faBox} />,
};

const DashboardStats = () => {
  const [stats, setStats] = useState<Record<string, number>>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchStats = useCallback(async () => {
    try {
      // Set loading state to true when starting to fetch data
      setIsLoading(true);

      // Fetch all entities stats {entity: count}
      const statsData = await apiService.get('stats');

      setStats(statsData.data);
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      // Set loading state to false when data fetching is complete (success or error)
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]); // Run effect only on mount

  if (isLoading && stats) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="relative flex flex-col items-center">
          {/* Spinner */}
          <div className="h-24 w-24 rounded-full border-8 border-gray-300 border-t-8 border-t-green-600 animate-spin mb-4"></div>
          {/* Text */}
          <p className="text-gray-300">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-teal-300 m-4 p-4 rounded-3xl'>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Object.entries(stats).map(([category, count]) => (
          <div key={category} className="bg-emerald-400 hover:bg-white text-white hover:text-teal-500 p-4 mb-4 rounded-3xl">
            <Link href={`/dashboard?status=${category}`}>
              <div className='flex flex-row space-x-5'>
                <div className="text-4xl font-bold mb-2">{iconMap[category]}</div>
                <div className="text-4xl font-bold">{count}</div>
              </div>
              <div className="text-teal-800 text-lg font-semibold capitalize">{category}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardStats;
