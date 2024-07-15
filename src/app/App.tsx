import React from 'react';
import { Provider } from 'react-redux';

import './styles/index.scss';
import '../shared/styles/index.scss';

import { store } from './store';
import CompaniesPage from '../pages/CompaniesPage/ui/CompaniesPage';

const App: React.FC = () => (
  <Provider store={store}>
    <CompaniesPage />
  </Provider>
);

export default App;
