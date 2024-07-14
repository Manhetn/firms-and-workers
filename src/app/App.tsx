// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import HomePage from '../pages/home';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <HomePage />,
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;

import './styles/index.scss';
import '../shared/styles/index.scss';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import CompaniesPage from '../pages/CompaniesPage/ui/CompaniesPage';

const App: React.FC = () => (
  <Provider store={store}>
    <CompaniesPage />
  </Provider>
);

export default App;
