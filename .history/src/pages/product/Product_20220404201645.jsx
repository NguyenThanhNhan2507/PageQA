import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";
import Logo from "../product/avata.png"

export default function Product() {
  return (
    <div className="terms">
      <div className="termContainer">
          <div className="termTopRight">
              <div className="termInfoTop">
                  <img src={Logo} alt="" className="termInfoImg" />
                  <span className="termName">COMP1234</span>
              </div>
              <div className="termInfoBottom">
                  <div className="termInfoItem">
                      <span className="termInfoKey">id:</span>
                      <span className="termInfoValue">1</span>
                  </div>
                  <div className="termInfoItem">
                      <span className="termInfoKey">Descirption:</span>
                      <span className="termInfoValue">Không làm mà đòi có ăn</span>
                  </div>
                  <div className="termInfoItem">
                      <span className="termInfoKey">Date:</span>
                      <span className="termInfoValue">20/3/2022</span>
                  </div>
                  <div className="termInfoItem">
                      <span className="termInfoKey">Action</span>
                      <span className="termInfoValue">no</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Term Name</label>
                  <input type="text" placeholder="COMP1687..." />
                  <label>Description</label>
                    <input type="text"></input>
                  <label>Date</label>
                  <input type="datetime-local"></input>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={Logo} alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
