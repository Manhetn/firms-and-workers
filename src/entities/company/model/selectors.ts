import FakeApiService from '../../../app/Services/FakeApiServise';
import { AppDispatch, RootState } from '../../../app/store';
import { removeCompaniesEmployees } from '../../employee/model/employeeSlice';
import { ICompanyData } from '../types';
import { addCompany, changeCompany, removeCompanies, setCompanies } from './companySlice';

export const laodCompanies = () => (dispatch: AppDispatch, getState: () => RootState) => {
  const state = getState();
  const companies = FakeApiService.getCompanies(state.companies.currentPage);

  dispatch(setCompanies(companies));
};

export const getCompanies = () => (state: RootState) => state.companies.companies;

export const getSelectedCompanies = () => (state: RootState) => state.companies.selectedCompanies;

export const addNewCompany = (newData: ICompanyData) => (dispatch: AppDispatch) => {
  /**
   * here is the logic of accessing the server and all that
   */
  dispatch(addCompany(newData));
};

export const makeChangingCompanyData = (newData: ICompanyData) => (dispatch: AppDispatch) => {
  /**
   * here is the logic of accessing the server and all that
   */
  dispatch(changeCompany(newData));
};

export const deleteSelectedCompanies = (selectedCompaniesArray: string[]) => (dispatch: AppDispatch) => {
  /**
   * here is the logic of accessing the server and all that
   */
  dispatch(removeCompanies(selectedCompaniesArray));
};

export const removeCompaniesThunk = (selectedCompanies: string[]) => (dispatch: AppDispatch) => {
  dispatch(removeCompanies(selectedCompanies));
  dispatch(removeCompaniesEmployees(selectedCompanies));
};
