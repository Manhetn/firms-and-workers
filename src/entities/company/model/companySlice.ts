import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICompanyData } from '../types';
import { INewEmploeesCountData } from '../../../shared/types';

export interface CompanyState {
  companies: ICompanyData[];
  selectedCompanies: string[];
  currentPage: number;
}

const initialState: CompanyState = {
  companies: [],
  selectedCompanies: [],
  currentPage: 0,
};

const companySlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    setCompanies(state, action: PayloadAction<ICompanyData[]>) {
      state.companies = action.payload;
    },
    removeCompanies(state, action: PayloadAction<string[]>) {
      state.companies = state.companies.filter((company) => !action.payload.includes(company.id));
    },
    addCompany(state, action: PayloadAction<ICompanyData>) {
      state.companies.push(action.payload);
    },
    toggleSelectCompany(state, action: PayloadAction<string>) {
      if (state.selectedCompanies.includes(action.payload)) {
        state.selectedCompanies = state.selectedCompanies.filter((id) => id !== action.payload);
      } else {
        state.selectedCompanies.push(action.payload);
      }
    },
    selectAllCompanies(state) {
      if (state.selectedCompanies.length === state.companies.length) {
        state.selectedCompanies = [];
      } else {
        state.selectedCompanies = state.companies.map((company) => company.id);
      }
    },
    changeCompany(state, action: PayloadAction<ICompanyData>) {
      const { id, name, employeeCount, address } = action.payload;
      const company = state.companies.find((company) => company.id === id);

      if (company) {
        company.name = name;
        company.employeeCount = employeeCount;
        company.address = address;
      }
    },
    updateEmployeeCount(state, action: PayloadAction<INewEmploeesCountData>) {
      const company = state.companies.find((comp) => {
        return comp.id === action.payload.companyId;
      });

      if (company) {
        company.employeeCount = action.payload.count;
      }
    },
  },
});

const { reducer: companyReducer, actions } = companySlice;

export const {
  setCompanies,
  addCompany,
  removeCompanies,
  toggleSelectCompany,
  selectAllCompanies,
  changeCompany,
  updateEmployeeCount,
} = actions;

export default companyReducer;
