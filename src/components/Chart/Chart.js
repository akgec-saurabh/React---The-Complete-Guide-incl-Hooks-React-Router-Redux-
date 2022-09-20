import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointsValues = props.datapoints.map((datapoint) => datapoint.value);

  const totalMaximum = Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar
          key={datapoint.id}
          label={datapoint.label}
          value={datapoint.value}
          maxValue={totalMaximum}
        />
      ))}
    </div>
  );
};
export default Chart;
