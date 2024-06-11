import React from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  ArcElement,
  PointElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  ArcElement,
  PointElement,
  Tooltip,
  Legend,
  Title
);

const Dashboard = () => {


  // Sample data for charts
  const enrolledData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Enrolled Students',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const projectStatusData = {
    labels: ['Initiated', 'Completed', 'In Progress'],
    datasets: [
      {
        label: 'Projects Status',
        data: [8, 5, 7],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
      },
    ],
  };

  const carbonFootprintData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Carbon Footprint Reduced (in tons)',
        data: [50, 100, 150, 200, 250, 300],
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
        borderColor: 'rgba(255, 206, 86, 1)',
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const leaderboardData = {
    labels: ['Org A', 'Org B', 'Org C', 'Org D'],
    datasets: [
      {
        label: 'Credits Generated',
        data: [500, 400, 300, 200],
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
      },
    ],
  };

  const progressBarStyle: React.CSSProperties = {
    width: '80%',
    height: '24px',
    backgroundColor: '#e0e0e0',
    borderRadius: '12px',
    overflow: 'hidden',
    position: 'relative',
  };

  const progressStyle: React.CSSProperties = {
    width: '80%',
    height: '100%',
    backgroundColor: '#6A64F1',
    borderRadius: '12px',
    textAlign: 'center',
    lineHeight: '24px',
    color: 'white',
    fontWeight: 'bold',
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-end mb-4">
      <div className="bg-white p-4 right-0">
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Download Project Report</button>
      </div>
      </div>
      <h1 className="text-2xl font-bold mb-4">Service Provider Dashboard</h1>
      <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Enrolled Students</h2>
          <Bar data={enrolledData} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Projects Status</h2>
          <Doughnut data={projectStatusData} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Generated Credits</h2>
          <p className="text-3xl font-bold">1500</p>
        </div>
        {/* <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Projects Initiated</h2>
          <p className="text-3xl font-bold">8</p>
        </div> */}
        {/* <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Projects Completed</h2>
          <p className="text-3xl font-bold">5</p>
        </div> */}
        {/* <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Projects In Progress</h2>
          <p className="text-3xl font-bold">7</p>
        </div> */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Committed Credits</h2>
          <p className="text-3xl font-bold">1200</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Carbon Footprint Reduced</h2>
          <Line data={carbonFootprintData} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Leaderboard</h2>
          <Bar data={leaderboardData} options={{ indexAxis: 'y' }} />
        </div>
        {/* <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Recent Activities</h2>
          <ul>
            <li><i className="fas fa-check-circle text-green-500"></i> Project A completed by Org B</li>
            <li><i className="fas fa-arrow-up text-blue-500"></i> Org C generated 100 credits</li>
            <li><i className="fas fa-play-circle text-yellow-500"></i> Project D initiated by Org A</li>
          </ul>
        </div> */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Target Progress</h2>
          <div style={progressBarStyle}>
            <div style={progressStyle}>80%</div>
          </div>
        </div>
      
        {/* <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Feedback and Ratings</h2>
          <p className="text-sm">Collect feedback and ratings for completed projects.</p>
          <button className="bg-green-500 text-white py-2 px-4 rounded">Submit Feedback</button>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;


