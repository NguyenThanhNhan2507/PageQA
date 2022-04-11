import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { CategoryContextProvider } from "./context/movieContext/MovieContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
    <CategoryContextProvider>
    <App />
    </CategoryContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
