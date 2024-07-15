import React from 'react';

import './styles.scss';

import CompanyList from '../../../../entities/company/components/CompanyList';
import EmployeeList from '../../../../entities/employee/components/EmployeeList';

const CompaniesPage: React.FC = () => {
  return (
    <div className='companies-page'>
      <CompanyList />
      <EmployeeList />
    </div>
  );
};

export default CompaniesPage;
