import "./Chart.css";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip,ResponsiveContainer } from 'recharts';

const Chart = ({title,data,grid,dataKey}) => {



  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd"/>
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
          <Tooltip/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart