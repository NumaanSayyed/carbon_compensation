import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
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
  const pdfREF = useRef<HTMLDivElement>(null);

  const downloadPDF = () => {
    const input = pdfREF.current;
    if (!input) return; // Add a null check

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imageData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width / 2; // Adjust for scale
      const imgHeight = canvas.height / 2; // Adjust for scale
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(imageData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save('project.pdf');
    });
  };

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

  const creditsData = {
    labels: ['Generated Credits', 'Committed Credits'],
    datasets: [
      {
        label: 'Forest',
        data: [500, 450],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: 'Water',
        data: [400, 300],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Soil',
        data: [300, 350],
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
      },
      {
        label: 'EWaste',
        data: [200, 400],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
      {
        label: 'Animal',
        data: [260, 450],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
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
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={downloadPDF}
          >
            Download Project Report
          </button>
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-4">Service Provider Dashboard</h1>
      <div id="dashboard-content" ref={pdfREF} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Enrolled Students</h2>
          <Bar data={enrolledData} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Projects Status</h2>
          <Doughnut data={projectStatusData} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Generated & Committed Credits</h2>
          <Bar data={creditsData} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Carbon Footprint Reduced</h2>
          <Line data={carbonFootprintData} />
        </div>
        {/* <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Leaderboard</h2>
          <Bar data={creditsData} options={{ indexAxis: 'y' }} />
        </div> */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Target Progress</h2>
          <div style={progressBarStyle}>
            <div style={progressStyle}>80%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
