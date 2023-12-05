// @/app/components/DashboardStats.tsx

import React, { useEffect, useState, useCallback } from 'react';
import apiService from '@/app/components/apiService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserMd, faUserNurse, faUserInjured,
  faCalendarAlt, faBox, faFilePrescription
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'

interface DashboardStatsProps {
  endpoints: string[];
}

const iconMap: Record<string, JSX.Element> = {
  doctors: <FontAwesomeIcon icon={faUserMd} />,
  nurses: <FontAwesomeIcon icon={faUserNurse} />,
  patients: <FontAwesomeIcon icon={faUserInjured} />,
  appointments: <FontAwesomeIcon icon={faCalendarAlt} />,
  prescriptions: <FontAwesomeIcon icon={faFilePrescription} />,
  inventory: <FontAwesomeIcon icon={faBox} />,
};

const DashboardStats: React.FC<DashboardStatsProps> = ({ endpoints }) => {
  const [stats, setStats] = useState<Record<string, number>>({});

  const fetchStats = useCallback(async () => {
    try {
      const statsData = await Promise.all(
        endpoints.map(async (endpoint) => {
          const response = await apiService.get(endpoint);
          return { [endpoint]: response.data.length };
        })
      );

      // Combine stats from different endpoints
      const combinedStats = Object.assign({}, ...statsData);
      setStats(combinedStats);
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  }, [endpoints]);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]); // Run effect only on mount

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