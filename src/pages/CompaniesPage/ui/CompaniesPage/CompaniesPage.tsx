import React from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';

import { RootState } from '../../../../app/store';
import CompanyList from '../../../../entities/company/components/CompanyList';
import RemoveCompaniesButton from '../../../../features/RemoveCompanies/ui/RemoveCompaniesButton/RemoveCompaniesButton';
import SelectAllCheckbox from '../../../../features/SelectAll/ui/SelectAllCheckbox';
import EmployeeList from '../../../../entities/employee/components/EmployeeList';
import AddEmployeeButton from '../../../../features/AddEmployee/ui/AddEmployeeButton';
import RemoveEmployeesButton from '../../../../features/RemoveEmployees/ui/RemoveEmployeesButton';

const CompaniesPage: React.FC = () => {
  return (
    <div className='companies-page'>
      <CompanyList />
      <EmployeeList />
    </div>
  );
};

export default CompaniesPage;
