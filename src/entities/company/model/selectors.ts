import FakeApiService from '../../../app/Services/FakeApiServise';
import { AppDispatch, RootState } from '../../../app/store';
import { removeCompaniesEmployees } from '../../employee/model/employeeSlice';
import { ICompanyData } from '../types';
import {
  addCompanies,
  addCompany,
  changeCompany,
  removeCompanies,
  setCompanies,
  setCompaniesCounter,
} from './companySlice';

export const laodCompanies =
  (currentPage: number = 0) =>
  (dispatch: AppDispatch) => {
    const resData = FakeApiService.getCompanies(currentPage);
    console.log('ya srabotal');

    dispatch(addCompanies(resData.companies));
    dispatch(setCompaniesCounter(resData.countCompanies));
  };

export const getCompaniesCounter = () => (state: RootState) => state.companies.companiesCounter;

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
