import "./categoriesList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CategoryContext } from "../../context/CategoryContext/CategoryContext";
import { deleteCategory, getCategories,  } from "../../context/CategoryContext/apiCalls";

export default function CategoryList() {
  const { categories, dispatch } = useContext(CategoryContext);

  useEffect(() => {
    getCategories(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteCategory(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "Category",
      headerName: "Category",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "content", headerName: "content", width: 120 },
    { field: "dateStart", headerName: "dateStart", width: 120 },
    { field: "dateEnd", headerName: "dateEnd", width: 120 },


    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{ pathname: "/category/" + params.row._id, category: params.row }}
            >
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={categories}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
}
