import Chart from "../../components/chart/Chart";
import "./Analytic.css";
import { userData } from "../../dummyData";

export default function analytic() {
  return (
    <div className="home">
    <label className="title">
        Analytics
    </label>
      <Chart data={userData} title="Statistical Analytics" grid dataKey="Statistical"/>
      <div className="homeWidgets">
      </div>
    </div>
  );
}
