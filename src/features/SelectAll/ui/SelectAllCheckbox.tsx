import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../../app/store';
// import { selectAllCompanies } from '../../entities/company/model/companySlice';
import { RootState } from '../../../app/store';
import { selectAllCompanies } from '../../../entities/company/model/companySlice';

const SelectAllCheckbox: React.FC = () => {
  const dispatch = useDispatch();
  const companies = useSelector((state: RootState) => state.companies.companies);
  const selectedCompanies = useSelector((state: RootState) => state.companies.selectedCompanies);

  const handleSelectAll = () => {
    dispatch(selectAllCompanies());
  };

  return (
    <input
      type='checkbox'
      onChange={handleSelectAll}
      checked={selectedCompanies.length === companies.length}
    />
  );
};

export default SelectAllCheckbox;
