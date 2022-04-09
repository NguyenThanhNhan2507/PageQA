import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";
import Logo from "../product/avata.png"

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
          <div className="productTopLeft">
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={Logo} alt="" className="productInfoImg" />
                  <span className="productName">COMP1234</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">1</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Descirption:</span>
                      <span className="productInfoValue">Không làm mà đòi có ăn</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Date:</span>
                      <span className="productInfoValue">20/3/2022</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Action</span>
                      <span className="productInfoValue">no</span>
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
