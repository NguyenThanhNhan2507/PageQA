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
  type: "CREATE_Category_START",
});

export const createCategoriesuccess = (category) => ({
  type: "CREATE_Category_SUCCESS",
  payload: category,
});

export const createCategoryFailure = () => ({
  type: "CREATE_Category_FAILURE",
});

export const updateCategoriestart = () => ({
  type: "UPDATE_Category_START",
});

export const updateCategoriesuccess = (category) => ({
  type: "UPDATE_CategoryCategoryCategory_SUCCESS",
  payload: category,
});

export const updateCategoryFailure = () => ({
  type: "UPDATE_Category_FAILURE",
});

export const deleteCategoriestart = () => ({
  type: "DELETE_Category_START",
});

export const deleteCategoriesuccess = (id) => ({
  type: "DELETE_Category_SUCCESS",
  payload: id,
});

export const deleteCategoryFailure = () => ({
  type: "DELETE_Category_FAILURE",
});
