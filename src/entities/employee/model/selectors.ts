import FakeApiService from '../../../app/services/FakeApiServise';
import { AppDispatch, RootState } from '../../../app/store';
import { updateEmployeeCount } from '../../company/model/companySlice';
import { IEmployee } from '../types';
import { addEmployee, editEmployee, removeEmployees, setEmployees } from './employeeSlice';

export const getEmployees = () => (state: RootState) => state.employees.employees;

export const getSelectedEmployees = () => (state: RootState) => state.employees.selectedEmployees;

export const laodEmployees = () => (dispatch: AppDispatch) => {
  const employees = FakeApiService.getEmployees();

  dispatch(setEmployees(employees));
};

export const makeEditEmployeeData = (newData: IEmployee) => (dispatch: AppDispatch) => {
  /**
   * here is the logic of accessing the server and all that
   */
  dispatch(editEmployee(newData));
};

export const addEmployeeThunk = (employee: IEmployee) => (dispatch: AppDispatch, getState: () => RootState) => {
  const state = getState();
  const employeeCount = state.employees.employees.filter((emp) => emp.companyId === employee.companyId).length;
  /**
   * here is the logic of accessing the server and all that
   */
  dispatch(addEmployee(employee));
  dispatch(updateEmployeeCount({ companyId: employee.companyId, count: employeeCount + 1 }));
};

export const removeCompniesEmployeesThunk =
  (selectedEmployees: string[]) => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState();
    const employees = state.employees.employees;

    const employeesToRemove = employees.filter((employee) => selectedEmployees.includes(employee.id));
    const employeesToRemoveCount: { [key: string]: number } = {};

    employeesToRemove.forEach((employee) => {
      if (!employeesToRemoveCount[employee.companyId]) {
        employeesToRemoveCount[employee.companyId] = 0;
      }
      employeesToRemoveCount[employee.companyId]++;
    });

    /**
     * here is the logic of accessing the server and all that
     */
    dispatch(removeEmployees(selectedEmployees));

    Object.keys(employeesToRemoveCount).forEach((companyId) => {
      const newEmployeeCount =
        employees.filter((emp) => emp.companyId === companyId).length - employeesToRemoveCount[companyId];
      dispatch(updateEmployeeCount({ companyId, count: newEmployeeCount }));
    });
  };
