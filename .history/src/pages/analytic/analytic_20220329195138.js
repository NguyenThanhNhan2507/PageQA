import Chart from "../../components/chart/Chart";
import "./Analytic.css";
import { userData } from "../../dummyData";

export default function analytic() {
  return (
    <div className="home">
    <label>
        dsadasdsa
    </label>
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
      </div>
    </div>
  );
}
