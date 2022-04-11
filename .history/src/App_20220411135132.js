import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Analytic from "./pages/analytic/analytic"
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]
  const [userStats, setUserStats] = useState([])

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/users/stats", {headers:{token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTNjM2JjMWM4NjA5MjAyMDM5MWJhOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTY1ODczOCwiZXhwIjoxNjUwMDkwNzM4fQ.dgj4a8PYEN6Na3YiKdk6Mm9FxVT6S_egqcUQM_3InWY",
          },
        });
        res.data.map(item=> setUserStats(prev=>[...prev,{name:MONTHS[item._id-1]}]))
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, []);
  console.log(userStats)
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path="/analytic">
            <Analytic />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
