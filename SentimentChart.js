// Create new component: src/components/SentimentChart.js
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function SentimentChart() {
  const [data, setData] = useState({
    positive: 65,
    negative: 15,
    neutral: 20
  });

  const chartData = {
    labels: ['Positive', 'Negative', 'Neutral'],
    datasets: [{
      data: [data.positive, data.negative, data.neutral],
      backgroundColor: [
        '#10b981',
        '#ef4444',
        '#94a3b8'
      ],
      borderWidth: 0
    }]
  };

  const handleAdjust = (type, value) => {
    setData(prev => ({
      ...prev,
      [type]: Math.max(0, Math.min(100, prev[type] + value))
    }));
  };

  return (
    <div className="interactive-chart">
      <Pie data={chartData} />
      <div className="chart-controls">
        <button onClick={() => handleAdjust('positive', 5)}>+ Positive</button>
        <button onClick={() => handleAdjust('negative', 5)}>+ Negative</button>
        <button onClick={() => handleAdjust('neutral', 5)}>+ Neutral</button>
      </div>
    </div>
  );
}