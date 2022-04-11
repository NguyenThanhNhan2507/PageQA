import axios from "axios";
import {
  createCategoriesFailure,
  createCategoriestart,
  createCategoriesuccess,
  deleteCategoryFailure,
  deleteCategoriestart,
  deleteCategoriesuccess,
  getCategoriesFailure,
  getCategoriesStart,
  getCategoriesSuccess,
} from "./CategoryActions";

export const getCategories = async (dispatch) => {
  dispatch(getCategoriesStart());
  try {
    const res = await axios.get("/categories", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getCategoriesSuccess(res.data));
  } catch (err) {
    dispatch(getCategoriesFailure());
  }
};

//create
export const createCategory = async (category, dispatch) => {
  dispatch(createCategoriestart());
  try {
    const res = await axios.post("/categories", category, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createCategoriesuccess(res.data));
  } catch (err) {
    dispatch(createCategoriesFailure());
  }
};

//delete
export const deleteCategory = async (id, dispatch) => {
  dispatch(deleteCategoriestart());
  try {
    await axios.delete("/categories/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteCategoriesuccess(id));
  } catch (err) {
    dispatch(deleteCategoryFailure());
  }
};
