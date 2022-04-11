export const getCategoriesStart = () => ({
  type: "GET_Categories_START",
});

export const getCategoriesSuccess = (categories) => ({
  type: "GET_Categories_SUCCESS",
  payload: categories,
});

export const getCategoriesFailure = () => ({
  type: "GET_Categories_FAILURE",
});

export const createCategoriestart = () => ({
  type: "CREATE_MOVIE_START",
});

export const createCategoriesuccess = (category) => ({
  type: "CREATE_MOVIE_SUCCESS",
  payload: category,
});

export const createMovieFailure = () => ({
  type: "CREATE_MOVIE_FAILURE",
});

export const updateCategoriestart = () => ({
  type: "UPDATE_MOVIE_START",
});

export const updateCategoriesuccess = (category) => ({
  type: "UPDATE_MOVIE_SUCCESS",
  payload: category,
});

export const updateMovieFailure = () => ({
  type: "UPDATE_MOVIE_FAILURE",
});

export const deleteCategoriestart = () => ({
  type: "DELETE_MOVIE_START",
});

export const deleteCategoriesuccess = (id) => ({
  type: "DELETE_MOVIE_SUCCESS",
  payload: id,
});

export const deleteMovieFailure = () => ({
  type: "DELETE_MOVIE_FAILURE",
});
