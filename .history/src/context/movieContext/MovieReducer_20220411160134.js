const CategoryReducer = (state, action) => {
  switch (action.type) {
    case "GET_Categories_START":
      return {
        categories: [],
        isFetching: true,
        error: false,
      };
    case "GET_Categories_SUCCESS":
      return {
        categories: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_Categories_FAILURE":
      return {
        categories: [],
        isFetching: false,
        error: true,
      };
    case "CREATE_Category_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_Category_SUCCESS":
      return {
        categories: [...state.categories, action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_Category_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "UPLOAD_Category_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPLOAD_Category_SUCCESS":
      return {
        categories: state.categories.map(
          (category) => category._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "UPLOAD_Category_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "DELETE_Category_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_Category_SUCCESS":
      return {
        categories: state.categories.filter((category) => category._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_Category_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default CategoryReducer;
