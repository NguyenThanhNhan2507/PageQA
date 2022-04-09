import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="addProductItem">
          <label>Term Descirption</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="addProductItem">
          <label>DateTime</label>
          <input type="date"></input>
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
