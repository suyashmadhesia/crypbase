import React from "react";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const { Title } = Typography;

function timeConverter(UNIX_timestamp){
    let a = new Date(UNIX_timestamp * 1000);
    // let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    // let year = a.getFullYear();
    // let month = months[a.getMonth()];
    // let date = a.getDate();
    let hour = a.getHours();
    // let min = a.getMinutes();
    // let sec = a.getSeconds();
    let time = hour+"h";
    return time;
  }

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];
  for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
    coinPrice.push(coinHistory?.data?.history[i]?.price);
    coinTimestamp.push(
      timeConverter(coinHistory?.data?.history[i]?.timestamp)
    );
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        id: 1,
        label: "Price in USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

//   console.log(coinHistory?.data);

  return (
    <>
      <Row className="chart-header">
        <Title level={2} clasname="chart-title">
          {coinName}
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price: ${currentPrice}
          </Title>
        </Col>
      </Row>
      <Line datasetIdKey="id" data={data} option={options} />
    </>
  );
};

export default LineChart;
