import { useEffect } from "react";
import Highcharts from "highcharts/highstock";

// Define the interface for the chart data
interface CoinMarketChart {
  prices: [number, number][];
  market_caps: [number, number][];
  total_volumes: [number, number][];
}

interface StockChartProps {
  data: CoinMarketChart;
}

const StockChart: React.FC<StockChartProps> = ({ data }) => {
  useEffect(() => {
    const fetchDataAndRenderChart = async () => {
      try {
        const chartData = data.prices;

        Highcharts.stockChart("container", {
          credits: {
            enabled: false,
          },
          rangeSelector: {
            enabled: false,
          },
          title: {
            text: "",
          },
          chart: {
            backgroundColor: "var(--background)",
          },

          xAxis: {
            gridLineColor: "var(--border)",
          },
          yAxis: {
            gridLineColor: "var(--border)",
            opposite: false,
            labels: {
              style: {
                color: "var(--font-color)",
                fontSize: "1.2rem",
              },
            },
          },
          navigator: {
            enabled: true,
            xAxis: {
              labels: {
                style: {
                  color: "var(--font-color)",
                  textOutline: "none",
                  fontSize: "1.2rem",
                },
              },
            },
          },
          scrollbar: {
            enabled: true,
            barBackgroundColor: "var(--font-color)",
            barBorderRadius: 7,
            barBorderWidth: 0,
            buttonArrowColor: "var(primary-foreground)",
            buttonBackgroundColor: "var(--primary-foreground)",
            buttonBorderRadius: 7,
            buttonBorderWidth: 0,
            rifleColor: "var(--primary-foreground)",
          },
          tooltip: {
            backgroundColor: "var(--primary)",
            borderColor: "none",
            style: {
              color: "var(--primary-foreground)",
              fontSize: "1.2rem",
            },
            pointFormat:
              "<div>{series.name}: <b>${point.y:,.2f}</b></div><br/>",
          },
          series: [
            {
              name: "Price",
              data: chartData,
              type: "line",
              color: "var(--primary)",
             }
          ],
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataAndRenderChart();
  }, [data]);

  return <div id="container" className="h-[55rem] w-full py-[1rem]"></div>;
};

export default StockChart;
