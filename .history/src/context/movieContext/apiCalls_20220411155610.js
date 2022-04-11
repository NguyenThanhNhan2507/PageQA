import axios from "axios";
import {
  createCategoriesFailure,
  createCategoriestart,
  createCategoriesuccess,
  deleteMovieFailure,
  deleteCategoriestart,
  deleteCategoriesuccess,
  getCategoriesFailure,
  getCategoriesStart,
  getCategoriesSuccess,
} from "./MovieActions";

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
export const createMovie = async (category, dispatch) => {
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
export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteCategoriestart());
  try {
    await axios.delete("/categories/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteCategoriesuccess(id));
  } catch (err) {
    dispatch(deleteMovieFailure());
  }
};
