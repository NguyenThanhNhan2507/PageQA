const MovieReducer = (state, action) => {
  switch (action.type) {
    case "GET_MOVIES_START":
      return {
        categories: [],
        isFetching: true,
        error: false,
      };
    case "GET_MOVIES_SUCCESS":
      return {
        categories: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_MOVIES_FAILURE":
      return {
        categories: [],
        isFetching: false,
        error: true,
      };
    case "CREATE_MOVIE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_MOVIE_SUCCESS":
      return {
        categories: [...state.categories, action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_MOVIE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "UPLOAD_MOVIE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPLOAD_MOVIE_SUCCESS":
      return {
        categories: state.categories.map(
          (category) => category._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "UPLOAD_MOVIE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "DELETE_MOVIE_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_MOVIE_SUCCESS":
      return {
        categories: state.categories.filter((category) => category._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_MOVIE_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default MovieReducer;
