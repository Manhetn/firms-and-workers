// import { useState } from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IEmployee } from '../types';

export interface Employee {
  id: string;
  companyId: string;
  lastName: string;
  firstName: string;
  position: string;
}

export interface EmployeeState {
  employees: Employee[];
  selectedEmployees: string[];
}

const initialState: EmployeeState = {
  employees: [],
  selectedEmployees: [],
};

const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setEmployees(state, action: PayloadAction<Employee[]>) {
      state.employees = action.payload;
    },
    addEmployee(state, action: PayloadAction<IEmployee>) {
      state.employees.push(action.payload);
    },
    removeEmployees(state, action: PayloadAction<string[]>) {
      state.employees = state.employees.filter((employee) => {
        return !action.payload.includes(employee.id);
      });
    },
    removeCompaniesEmployees(state, action: PayloadAction<string[]>) {
      state.employees = state.employees.filter((employee) => {
        return !action.payload.includes(employee.companyId);
      });
    },
    editEmployee(state, action: PayloadAction<IEmployee>) {
      const { id, lastName, firstName, position } = action.payload;
      const employee = state.employees.find((employee) => employee.id === id);

      if (employee) {
        employee.lastName = lastName;
        employee.firstName = firstName;
        employee.position = position;
      }
    },
    toggleSelectEmployee(state, action: PayloadAction<string>) {
      if (state.selectedEmployees.includes(action.payload)) {
        state.selectedEmployees = state.selectedEmployees.filter((id) => id !== action.payload);
      } else {
        state.selectedEmployees.push(action.payload);
      }
    },
    selectAllEmployees(state) {
      if (state.selectedEmployees.length === state.employees.length) {
        state.selectedEmployees = [];
      } else {
        state.selectedEmployees = state.employees.map((employee) => employee.id);
      }
    },
  },
});

const { reducer: employeeReducer, actions } = employeeSlice;

export const {
  setEmployees,
  addEmployee,
  toggleSelectEmployee,
  selectAllEmployees,
  editEmployee,
  removeEmployees,
  removeCompaniesEmployees,
} = actions;

export default employeeReducer;
