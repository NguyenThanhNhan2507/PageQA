export const getMoviesStart = () => ({
  type: "GET_MOVIES_START",
});

export const getMoviesSuccess = (categories) => ({
  type: "GET_MOVIES_SUCCESS",
  payload: categories,
});

export const getMoviesFailure = () => ({
  type: "GET_MOVIES_FAILURE",
});

export const createMovieStart = () => ({
  type: "CREATE_MOVIE_START",
});

export const createMovieSuccess = (category) => ({
  type: "CREATE_MOVIE_SUCCESS",
  payload: category,
});

export const createMovieFailure = () => ({
  type: "CREATE_MOVIE_FAILURE",
});

export const updateMovieStart = () => ({
  type: "UPDATE_MOVIE_START",
});

export const updateMovieSuccess = (category) => ({
  type: "UPDATE_MOVIE_SUCCESS",
  payload: category,
});

export const updateMovieFailure = () => ({
  type: "UPDATE_MOVIE_FAILURE",
});

export const deleteMovieStart = () => ({
  type: "DELETE_MOVIE_START",
});

export const deleteMovieSuccess = (id) => ({
  type: "DELETE_MOVIE_SUCCESS",
  payload: id,
});

export const deleteMovieFailure = () => ({
  type: "DELETE_MOVIE_FAILURE",
});
