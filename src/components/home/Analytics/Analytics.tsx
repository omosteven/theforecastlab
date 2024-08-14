import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./Analytics.scss";

const logisticsData = [
  { month: "Jan", shipmentVolume: 4000, deliveryTime: 7.5, costs: 2400 },
  { month: "Feb", shipmentVolume: 3000, deliveryTime: 6.8, costs: 2210 },
  { month: "Mar", shipmentVolume: 5000, deliveryTime: 7.9, costs: 2290 },
  { month: "Apr", shipmentVolume: 4780, deliveryTime: 8.2, costs: 2000 },
  { month: "May", shipmentVolume: 5890, deliveryTime: 7.3, costs: 2181 },
  { month: "Jun", shipmentVolume: 4390, deliveryTime: 6.9, costs: 2500 },
  { month: "Jul", shipmentVolume: 4490, deliveryTime: 7.0, costs: 2100 },
  { month: "Aug", shipmentVolume: 4800, deliveryTime: 7.4, costs: 2300 },
  { month: "Sep", shipmentVolume: 3900, deliveryTime: 6.5, costs: 2200 },
  { month: "Oct", shipmentVolume: 5300, deliveryTime: 7.8, costs: 2450 },
  { month: "Nov", shipmentVolume: 4700, deliveryTime: 7.1, costs: 2330 },
  { month: "Dec", shipmentVolume: 5200, deliveryTime: 7.6, costs: 2490 },
];

const Analytics = () => {
  return (
    <section
      className="pricings sections ourtechnologies"
      data-aos="fade-zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <div className="container-sms">
        <div className="pricing-innesr section-insner ">
          <div className="analytics-chart">
            {/* <h2>Supply Chain Logistics Analytics</h2> */}
            <ResponsiveContainer width="100%" height={400}>
              <LineChart
                data={logisticsData}
                margin={{
                  top: 20,
                  right: 0,
                  left: 0,
                  bottom: 5,
                }}
              >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    background: "#2c3039",
                    border: "none",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="shipmentVolume"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="deliveryTime" stroke="#82ca9d" />
                <Line type="monotone" dataKey="costs" stroke="#ff7300" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
