import { configureStore } from '@reduxjs/toolkit';
import companyReducer from '../entities/company/model/companySlice';
import employeeReducer from '../entities/employee/model/employeeSlice';

export const store = configureStore({
  reducer: {
    companies: companyReducer,
    employees: employeeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
